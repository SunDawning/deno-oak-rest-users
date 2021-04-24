import{double}from"./double.js";
import{formatTimeZone}from"./formatTimeZone.js";
/**
 * 格式化输出时间
 * 形如：hour:minute:second
 */
function formatTime(timestamp){
    let date;
    if(timestamp){
        date=new Date(timestamp);
    }else{
        date=new Date();
    }
    let year=date.getFullYear();
    let month=double(date.getMonth());
    let day=double(date.getDay());
    let hour=double(date.getHours());
    let minute=double(date.getMinutes());
    let second=double(date.getSeconds());
    let timezone=formatTimeZone(date);
    return `[${year}-${month}-${day} ${hour}:${minute}:${second} ${timezone}]`;
}
export{formatTime}
