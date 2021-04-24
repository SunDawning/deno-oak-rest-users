/*
 * 支持的API地址
 */
import{
    Router,
}from"https://deno.land/x/oak@v7.3.0/mod.ts";
let router=new Router();
import{onGetRoot}from"./onGetRoot.js";
router.get("/",onGetRoot);
import{onV1GetUsers}from"./onV1GetUsers.js";
router.get("/v1/users",onV1GetUsers);
import{onV1GetUserIDs}from"./onV1GetUserIDs.js";
router.get("/v1/userIDs",onV1GetUserIDs);
import{onV1GetUser}from"./onV1GetUser.js";
router.get("/v1/users/:id",onV1GetUser);
export{router}