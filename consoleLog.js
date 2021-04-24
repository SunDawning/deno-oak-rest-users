import{formatTime}from"./formatTime.js";
/**
 * 修改console.log
 * 形如：[2021-04-24 10:24:18 UTC+08:00] ...
 */
function consoleLog(){
    console.log.apply(null,[`${formatTime()}`].concat(Object.values(arguments)));
}
export{consoleLog}
