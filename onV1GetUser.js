import{USERS}from"./USERS.js";
import{consoleLog}from"./consoleLog.js";
/*
 * GET访问＂/v1/users/:id＂
 * ＂/v1/users/1＂得到到＂context.params＂为：{ id: "1" }
 * 根据用户的ID来取用户的数据
 */
function onV1GetUser(context){
    consoleLog("接收到查询用户的请求",context.params);
    let id=parseInt(context.params.id);
    let user=USERS.filter(function(user){
        return user.id===id;
    })[0];
    context.response.body=user;
    consoleLog("onV1GetUser",user);
}
export{onV1GetUser}
