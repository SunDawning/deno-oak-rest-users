import{consoleLog}from"./consoleLog.js";
/*
 * GET访问＂/"
 */
function onGetRoot(context){
    let path=context.matched[0].path;
    consoleLog("接收到请求",path);
    // consoleLog(context);
    let html=new TextDecoder("utf-8").decode(Deno.readFileSync(`./index.html`));
    consoleLog("解析完HTML","./index.html");
    // consoleLog(html);
    context.response.body=html;
}
export{onGetRoot}
