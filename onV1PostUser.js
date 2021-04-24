import{USERS}from"./USERS.js";
import{consoleLog}from"./consoleLog.js";
/*
 * POST访问＂/v1/users＂来添加用户
 */
async function onV1PostUser(context){
    let requestBody=await (await context.request.body(true)).value;
    consoleLog(requestBody);
    let name=requestBody.name;
    let age=requestBody.age;
    let user={
        id:USERS.length+1,
        name:name,
        age:age,
    }
    consoleLog(user);
    context.response.body=user;
    USERS.push(user);
}
export{onV1PostUser}
