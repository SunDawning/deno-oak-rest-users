import{
    getUnDeletedUsers,
    USERS,
}from"./USERS.js";
import{consoleLog}from"./consoleLog.js";
/*
 * GET访问＂/v1/userIDs＂
 * 得到所有用户的ID
 */
function onV1GetUserIDs(context){
    consoleLog("接收到获取所有用户的ID的请求");
    let USERIDs=getUnDeletedUsers().map(function(user){
        return user.id;
    });
    context.response.body=USERIDs;
    consoleLog("onV1GetUserIDs",USERIDs);
}
export{onV1GetUserIDs}
