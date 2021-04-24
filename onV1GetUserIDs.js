import{USERS}from"./USERS.js";
/*
 * GET访问＂/v1/userIDs＂
 * 得到所有用户的ID
 */
function onV1GetUserIDs(context){
    context.response.body=USERS.map(function(user){
        return user.id;
    });
}
export{onV1GetUserIDs}
