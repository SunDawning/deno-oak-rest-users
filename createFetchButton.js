/*
 * 创建按钮
 * @param output 用来输出显示点击按钮后所获取得JSON数据
 */
function createButton(innerText,onClick,output){
    let button=document.createElement("button");
    button.innerText=innerText;
    function onClickPrintJSON(event){
	onClick().then(function(response){
            return response.json();
        }).then(function(json){
	    output.innerText=JSON.stringify(json);
	});
    }
    button.addEventListener("click",onClickPrintJSON);
    return button;
}
export{createButton}
