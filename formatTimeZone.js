import{double}from"./double.js";
/**
 * 得到格式化的时区
 * 形如：UTC+08:00
 * JavaScript getTimezoneOffset() 方法: https://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp
 */
function formatTimeZone(date){
    let timezoneOffset=date.getTimezoneOffset();
    let absTimezoneOffset=Math.abs(timezoneOffset);
    let hour=double(Math.floor(absTimezoneOffset/60));
    let minute=double(absTimezoneOffset-(hour*60));
    if(timezoneOffset>0){
        return `UTC-${hour}:${minute}`;
    }else if(timezoneOffset=0){
        return "UTC+00:00";
    }else{
        return `UTC+${hour}:${minute}`;
    }
}
export{formatTimeZone}
