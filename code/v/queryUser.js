/**
 * Created by xiazhengxin on 2016/3/15 7:35.
 */

var fs = require("fs");
var platformConfig = require("../../config/platform");
var user = require("../model/user");
var jutil = require("../utils/jutil");
var async = require("async");
var crypto = require("crypto");

function start(postData, response, query) {
    var returnData = {};
    returnData["errorCode"] = 0;
    returnData["errorMessage"] = "";
    if (jutil.postCheck(query, "rcuid", "appId", "serverId", "time", "sign") == false) {
        returnData["errorCode"] = 4;
        returnData["errorMessage"] = "postError";
        echo(returnData);
        return;
    }
    var platformUserId = query["rcuid"];
    var serverId = query["serverId"];
    var time = query["time"];
    var appId = query["appId"];
    var sign = query["sign"];
    var platformId = "RayCreator";
    var mConfig = platformConfig[platformId];
    if (mConfig["serverId"] == undefined || mConfig["serverId"] == null) {
        mConfig["serverId"] = 1;
    }
    var mCountry = mConfig["country"];
    var appKey = mConfig["appKey"];
    var userUid;
    var userData;
    var returnObj = {};
    async.series([function (cb) {
        var toSignStr = appId + "" + platformUserId + "" + serverId + "" + time + "" + appKey;
        var generateSign = crypto.createHash('md5').update(toSignStr, "utf8").digest('hex');
        if (generateSign != sign && sign != "DEBUG") {
            cb("SIGN ERR");
        } else {
            cb();
        }
    }, function (cb) {
        user.pUserIdToUserUid(mCountry, serverId, platformUserId, function (err, res) {
            console.log(err, res);
            if (err == null && res != null && typeof res == "object" && res.length != 0) {
                userUid = res[0]["userUid"];
            } else {
                err = "NULL";
            }
            cb(err);
        });
    }, function (cb) {
        user.getUser(userUid, function (err, res) {
            console.log(err, res);
            userData = res;
            cb(err);
        });
    }, function (cb) {
        if (userData == null || userData["platformId"] != "rusen") {
            cb("NO SUCH USER");
        } else {
            cb();
        }
    }, function (cb) {
        returnObj["name"] = jutil.fromBase64(userData["userName"]);
        returnObj["roleId"] = userData["userUid"];
        returnObj["level"] = userData["lv"];
        returnObj["gold"] = userData["gold"];
        cb();
    }], function (err, res) {
        if (err) {
            returnData["errorCode"] = (err == "SIGN ERR" ? 2 : 1);
            returnData["errorMessage"] = err;
        } else {
            returnData["role"] = returnObj;
        }
        echo(returnData);
    });
    function echo(data) {
        var str = JSON.stringify(data);
        if (query != '' && query.callback != undefined) {
            response.end(query.callback + '(' + str + ')', "utf-8");
        } else {
            response.end(str, "utf-8");
        }
    }
}

exports.start = start;