/******************************************************************************
 * 累计消费
 * 奖励获取接口
 * Create by MR.Luo.
 * Create at 14-6-10.
 *****************************************************************************/

var async = require("async");
var jutil = require("../utils/jutil");
var mongoStats = require("../model/mongoStats");
var user = require("../model/user");
var modelUtil = require("../model/modelUtil");
var activityConfig = require("../model/activityConfig");
var practiceTotalConsume = require("../model/practiceTotalConsume");
var stats = require("../model/stats");
var mongoStats = require("../model/mongoStats");

exports.start = function(postData, response, query){

    if (jutil.postCheck(postData,"pay") == false) {
        response.echo("totalConsume.reward",jutil.errorInfo("postError"));
        return;
    }

    var ACTIVITY_CONFIG_NAME = "totalConsume";

    var userUid = query["userUid"];
    var pay = parseInt(postData["pay"]);

    var currentConfig = null; // 当前活动配置
    var rewardData = null; // 奖励数据
    var sTime = 0; // 活动开始时间
    var payIndex = 0;
    var rtnArr = [];

    async.series([
        // 判断USER IF VALID
        function(cb) {
            user.getUser(userUid, function(err, res){
                if (err) {
                    cb(err);
                } else if (res == null) {
                    cb("dbError");
                } else {
                    cb(null);
                }
            });
        },
        // 获取活动配置数据
        function(cb) {
            activityConfig.getConfig(userUid,ACTIVITY_CONFIG_NAME, function(err, res){
                if (err || res == null) cb("CannotGetConfig");
                else {
                    if (res[0]) {
                        sTime = res[4];
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
                    } else {
                        cb("notOpen");
                    }
                }
            });
        },
        // 取保存的奖励数据
        function(cb) {
            practiceTotalConsume.getRewardData(userUid, sTime, function(err, res){
                if (err) cb(err);
                else {
                    rewardData = res || {};
                    cb(null);
                }
            });
        },
        // 判断能否领奖
        function(cb) {
            var cashConsume = rewardData["cashConsume"];
            var rewardsGetMask = rewardData["rewardsGetMask"];

            if (cashConsume < pay) {
                cb("noRewardToGet");
            } else {
                payIndex = __getPayIndex(currentConfig, pay);
                if (payIndex < 0) {
                    cb("configError");
                    return;
                }
                if (jutil.bitGet(rewardsGetMask, payIndex) === 0) {
                    cb(null);
                } else {
                    cb("noRewardToGet");
                }
            }
        },

        // 更新奖励数据(把这个操作放在发奖前面是为了防止刷数据)
        function (cb) {
            practiceTotalConsume.updateRewardData(userUid, payIndex, false, sTime, function(err){
                if (err) console.error(err);
                cb(err);
            });
        },

        // 发放奖励
        function(cb) {
            var payConfig = __getPayConfig(currentConfig, pay);
            if (!payConfig) {
                cb("configError");
                return;
            }
            //TODO: 根据 pay 分支
            activityConfig.getConfig(userUid, "totalConsume", function (err, res) {
                if (err || res[0] != true) {
                    return;
                }
                stats.recordWithLevel(pay, res[2]["list"], true, "pay", "", [mongoStats.practiceTotalConsume1, mongoStats.practiceTotalConsume2, mongoStats.practiceTotalConsume3, mongoStats.practiceTotalConsume4, mongoStats.practiceTotalConsume5, mongoStats.practiceTotalConsume6, mongoStats.practiceTotalConsume7, mongoStats.practiceTotalConsume8, mongoStats.practiceTotalConsume9, mongoStats.practiceTotalConsume10], function (tag) {
                    stats.events(userUid, "127.0.0.1", null, tag);
                });
            });
            var rewardConfig = payConfig["reward"];

            async.forEach(Object.keys(rewardConfig), function(i, forCb){
                var itemData = rewardConfig[i];
                __rwHandler(userUid, itemData["id"], itemData["count"], function(err, res){
                    if (res) {
                        rtnArr.push(res);
                    }
                    forCb(null);
                });
            }, function(err){
                cb(null);
            });
        }
    ], function(err){
        if (err) {
            response.echo("totalConsume.reward",  jutil.errorInfo(err));
        } else {
            response.echo("totalConsume.reward",  rtnArr);
        }
    });
};

function __getPayIndex(currentConfig, pay) {
    var index = -1;
    var configList = currentConfig["list"];
    for (var key in configList) {
        if (configList.hasOwnProperty(key)) {
            var subConfig = configList[key];
            if (pay == subConfig["pay"]) {
                break;
            }
            ++index;
        }
    }
    return (index + 1);
}

function __getPayConfig(currentConfig, pay) {
    var configList = currentConfig["list"];
    for (var key in configList) {
        if (configList.hasOwnProperty(key)) {
            var subConfig = configList[key];
            if (pay == subConfig["pay"]) {
                return subConfig;
            }
        }
    }
    return null;
}

function __rwHandler(userUid, id, count, cb) {

    mongoStats.dropStats(id, userUid, 0, null, mongoStats.PRACTICE_TOTALCONSUME, count);
    switch (id) {
        default:
            modelUtil.addDropItemToDB(id,count,userUid,0,1,function(err,res) {
                if (err) cb("dbError");
                else {
                    cb(null, res);
                }
            });
            break;
    }
}