import{
    Application,
    Router
}from"https://deno.land/x/oak@v7.3.0/mod.ts";
import{consoleLog}from"./consoleLog.js";
let router=new Router();
let application=new Application();
/*
 * GET访问＂/"
 */
function onGetRoot(context){
    consoleLog(context);
    context.response.body=`拼音`;
}
router.get("/",onGetRoot);
/*
 * GET访问＂/v1/users＂
 */
let USERS=[
    {
        id:1,
        name:"张三",
        age:40,
    },
    {
        id:2,
        name:"李四",
        age:20,
    },
];
function onV1GetUsers(context){
    context.response.body={
        users:USERS,
    };
}
router.get("/v1/users",onV1GetUsers);
/*
 * GET访问＂/v1/users/:id＂
 * ＂/v1/users/1＂得到到＂context.params＂为：{ id: "1" }
 */
function onV1GetUser(context){
    consoleLog(context.params);
    let id=parseInt(context.params.id);
    context.response.body=USERS.filter(function(user){
        return user.id===id;
    })[0];
}
router.get("/v1/users/:id",onV1GetUser);
application.use(router.routes());
let port=8080;
consoleLog(`Listen http://localhost:${port}`);
await application.listen({
    port:port,
});
