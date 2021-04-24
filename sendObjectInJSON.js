/**
 * 将object发送到url
 */
function sendObjectInJSON(url,method,object){
    let headers=new Headers();
    headers.set("content-type","application/json; charset=utf-8")
    window.fetch(url,{
        method:method,
        headers:headers,
        body:JSON.stringify(object),
    });
}
function postObjectInJSON(url,object){
    sendObjectInJSON(url,"POST",object);
}
function putObjectInJSON(url,object){
    sendObjectInJSON(url,"PUT",object);
}
export{
    putObjectInJSON,
    postObjectInJSON,
    sendObjectInJSON,
}
