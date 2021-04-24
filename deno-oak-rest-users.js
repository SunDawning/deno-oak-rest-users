import{
    Application,
    Router
}from"https://deno.land/x/oak@v7.3.0/mod.ts";
import{consoleLog}from"./consoleLog.js";
let router=new Router();
let application=new Application();
/*
 * 访问＂/"
 */
function onGetRoot(context){
    consoleLog(context);
    context.response.body=`拼音`;
}
router.get("/",onGetRoot);
/*
 * 访问＂/v1/users＂
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
    context.response.body={users:USERS};
}
router.get("/v1/users",onV1GetUsers);
application.use(router.routes());
let port=8080;
consoleLog(`Listen http://localhost:${port}`);
await application.listen({
    port:port,
});
