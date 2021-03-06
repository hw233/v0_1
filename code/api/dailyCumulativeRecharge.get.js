/******************************************************************************
 * 每日累计充值
 * 数据获取接口
 * Create by MR.Luo.
 * Create at 14-6-9.
 *****************************************************************************/

var async = require("async");
var jutil = require("../utils/jutil");
var activityConfig = require("../model/activityConfig");
var dailyRecharge = require("../model/dailyCumulativeRecharge");

exports.start = function(postData, response, query){

    var ACTIVITY_CONFIG_NAME = "dailyTotalRecharge";

    var userUid = query["userUid"];
    var currentConfig = null;
    var rewardData = null;
    var gRes = null;
    var sTime = 0;
    var eTime = 0;

    async.series([
        // 获取活动配置数据
        function(cb) {
            activityConfig.getConfig(userUid,ACTIVITY_CONFIG_NAME, function(err, res){
                if (err || res == null) cb("CannotGetConfig");
                else {
                    sTime = res[4];
                    eTime = res[5];
                    var activityArg = parseInt(res[1]);
                    if (isNaN(activityArg)) activityArg = 1;
                    res[3] = res[3] || {};

                    if (activityArg == -1) {
                        // 取数据库配置，如果配置不存在取默认配置
                        currentConfig = res[2] || res[3]["1"];
                    } else {
                        // 取指定配置，如果配置不存在取默认配置
                        currentConfig = res[3][activityArg] || res[3]["1"];
                    }
                    if (!currentConfig) {
                        cb("configError");
                    } else {
                        cb(null);
                    }
                }
            });
        },
        // 取保存的奖励数据
        function(cb) {
            dailyRecharge.getRewardData(userUid, sTime, function(err, res){
                if (err) cb(err);
                else {
                    rewardData = res || {};
                    cb(null);
                }
            });
        },
        // 生成返回对象
        function(cb) {
            var cashCharge = rewardData["cashCharge"];
            var rewardsGetMask = rewardData["rewardsGetMask"];
            var configList = currentConfig["list"];
            var index = 0;
            gRes = {
                "list" : [],         // 数据项列表
                "cashCharge" : cashCharge,    // 已充值
                "eTime" : eTime,      // 活动结束时间
                "sTime": sTime       // 活动开始时间
            };
            for (var key in configList) {
                if (configList.hasOwnProperty(key)) {
                    var subConfig = configList[key];
                    var pay = subConfig["pay"];
                    gRes.list.push({
                        "config" : subConfig, // 配置数据
                        "canGet" : (pay <= cashCharge), // 是否能领奖
                        "alreadyGet" : jutil.bitGet(rewardsGetMask, index), // 奖励是否已经领取
                        "cashCharge" : Math.min(pay, cashCharge) // 条目相关充值金额，最大值为条目值
                    });
                    ++index;
                }
            }
            cb(null);
        }
    ], function(err){
        if (err) {
            response.echo("dailyCumulativeRecharge.get",  jutil.errorInfo(err));
        } else {
            response.echo("dailyCumulativeRecharge.get",  gRes);
        }
    });
};