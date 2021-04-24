/*
 * 支持的API地址
 */
import{
    Router,
}from"https://deno.land/x/oak@v7.3.0/mod.ts";
let router=new Router();
import{onGetRoot}from"./onGetRoot.js";
router.get("/",onGetRoot);
import{onGetJS}from"./onGetJS.js";
router.get("/sendObjectInJSON.js",onGetJS);
import{onV1GetUsers}from"./onV1GetUsers.js";
router.get("/v1/users",onV1GetUsers);
import{onV1PostUser}from"./onV1PostUser.js";
router.post("/v1/users",onV1PostUser);
import{onV1GetUserIDs}from"./onV1GetUserIDs.js";
router.get("/v1/userIDs",onV1GetUserIDs);
import{onV1GetUser}from"./onV1GetUser.js";
router.get("/v1/users/:id",onV1GetUser);
import{onV1PutUser}from"./onV1PutUser.js";
router.put("/v1/users/:id",onV1PutUser);
import{onV1DeleteUser}from"./onV1DeleteUser.js";
router.delete("/v1/users/:id",onV1DeleteUser);
export{router}
