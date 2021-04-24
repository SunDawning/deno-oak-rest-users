import{USERS}from"./USERS.js";
/*
 * GET访问＂/v1/users＂
 * 得到所有用户
 */
function onV1GetUsers(context){
    context.response.body=USERS;
}
export{onV1GetUsers}
