import{consoleLog}from"./consoleLog.js";
/*
 * GET访问＂/"
 */
function onGetRoot(context){
    // consoleLog(context);
    let html=new TextDecoder("utf-8").decode(Deno.readFileSync(`./index.html`));
    // consoleLog(html);
    context.response.body=html;
}
export{onGetRoot}
