import{USERS}from"./USERS.js";
import{consoleLog}from"./consoleLog.js";
/*
 * DELETE访问＂/v1/users/:id＂
 * ＂/v1/users/1＂得到到＂context.params＂为：{ id: "1" }
 * 根据用户的ID来删除用户的数据
 */
function onV1DeleteUser(context){
    consoleLog("接收到删除用户的请求",context.params);
    let id=parseInt(context.params.id);
    let user=USERS.filter(function(user){
        return user.id===id;
    })[0];
    user.deleted=true;
    context.response.body=user;
    consoleLog("已删除用户",user);
}
export{onV1DeleteUser}
