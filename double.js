/**
 * 个位数变以零开头的两位数
 * js中格式化时间一位数变成两位数_minton-CSDN博客: https://blog.csdn.net/u013103102/article/details/53636097
 */
function double(number){
    return (Array(2).join(0)+number).slice(-2);
}
export{double}
