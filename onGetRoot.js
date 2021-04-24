/*
 * GET访问＂/"
 */
function onGetRoot(context){
    consoleLog(context);
    context.response.body=`拼音`;
}
export{onGetRoot}
