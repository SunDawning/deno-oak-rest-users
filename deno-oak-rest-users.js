import{
    Application,
    Router
}from"https://deno.land/x/oak@v7.3.0/mod.ts";
let router=new Router();
let application=new Application();
function onGetRoot(context){
    context.response.body=`拼音`;
}
router.get("/",onGetRoot);
application.use(router.routes());
let port=8080;
console.log(`Listen http://localhost:${port}`);
await application.listen({
    port:port,
});
