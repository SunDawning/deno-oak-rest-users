import{consoleLog}from"./consoleLog.js";
/*
 * GET访问＂/*.js"
 */
function onGetJS(context){
    let path=context.matched[0].path;
    consoleLog("接收到请求",path);
    // consoleLog(context);
    let file=`.${path}`;
    let html=new TextDecoder("utf-8").decode(Deno.readFileSync(file));
    consoleLog("解析完JS",file);
    // consoleLog(html);
    let headers=new Headers()
    headers.set("content-type","text/javascript; charset=utf-8");
    context.response.headers=headers;
    context.response.body=html;
}
export{onGetJS}
