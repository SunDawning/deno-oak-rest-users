import{
    Application,
}from"https://deno.land/x/oak@v7.3.0/mod.ts";
import{router}from"./router.js";
let application=new Application();
application.use(router.routes());
let port=8080;
import{consoleLog}from"./consoleLog.js";
consoleLog(`Listen http://localhost:${port}`);
await application.listen({
    port:port,
});
