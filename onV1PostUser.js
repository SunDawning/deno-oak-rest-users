import{USERS}from"./USERS.js";
import{consoleLog}from"./consoleLog.js";
/*
 * POST访问＂/v1/users＂来添加用户
 */
async function onV1PostUser(context){
    let requestBody=await (await context.request.body(true)).value;
    consoleLog("接收到添加用户的请求",requestBody);
    let name=requestBody.name;
    let age=requestBody.age;
    let user={
        id:USERS.length+1,
        name:name,
        age:age,
    }
    consoleLog("处理后得到需要添加的用户数据",user);
    context.response.body=user;
    USERS.push(user);
    consoleLog("已添加用户")
}
export{onV1PostUser}
