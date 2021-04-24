import{USERS}from"./USERS.js";
import{consoleLog}from"./consoleLog.js";
/*
 * GET访问＂/v1/users＂
 * 得到所有用户
 */
function onV1GetUsers(context){
    let path=context.matched[0].path;
    consoleLog("接收到请求",path);
    consoleLog("查询所有用户",USERS);
    context.response.body=USERS;
}
export{onV1GetUsers}
