import{USERS}from"./USERS.js";
import{consoleLog}from"./consoleLog.js";
/*
 * PUT访问＂/v1/users/:id＂
 * 修改某个用户的数据
 */
async function onV1PutUser(context){
    consoleLog("接收到修改用户数据的请求");
    let id=context.params.id;
    consoleLog("用户id",id);
    let requestBody=await (await context.request.body(true)).value;
    consoleLog("请求修改用户数据",requestBody);
    let user=USERS[id-1];
    consoleLog("原用户数据",user);
    let name=requestBody.name;
    let age=requestBody.age;
    user=Object.assign(user,{
        name:name,
        age:age,
    })
    context.response.body=user;
    consoleLog("已修改用户",user);
}
export{onV1PutUser}
