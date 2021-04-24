import{USERS}from"./USERS.js";
/*
 * GET访问＂/v1/users/:id＂
 * ＂/v1/users/1＂得到到＂context.params＂为：{ id: "1" }
 * 根据用户的ID来取用户的数据
 */
function onV1GetUser(context){
    consoleLog(context.params);
    let id=parseInt(context.params.id);
    context.response.body=USERS.filter(function(user){
        return user.id===id;
    })[0];
}
export{onV1GetUser}
