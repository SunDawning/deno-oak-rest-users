import{putObjectInJSON,postObjectInJSON}from"./sendObjectInJSON.js";
import{createFetchButton}from"./createFetchButton.js";
let output=document.createElement("pre");
output.style.cssText=`white-space:pre-wrap;word-break:break-word;`;
[
    createFetchButton("所有用户",function(){return window.fetch("/v1/users");},output),
    createFetchButton("所有用户ID",function(){return window.fetch("/v1/userIDs");},output),
    createFetchButton("查询用户",function(){return window.fetch("/v1/users/1");},output),
    createFetchButton("添加用户",function(){return postObjectInJSON("/v1/users",{name:"王五",age:8});},output),
    createFetchButton("修改用户",function(){return putObjectInJSON("/v1/users/1",{name:"王五",age:8});},output),
    createFetchButton("删除用户",function(){return window.fetch("/v1/users/1",{method:"DELETE"});},output),
].forEach(function(button){
    document.body.appendChild(button);
});
document.body.appendChild(output);      
