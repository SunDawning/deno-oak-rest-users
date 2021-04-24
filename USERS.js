/*
 * 所有用户数据
 */
let USERS=[
    {
        id:1,
        name:"张三",
        age:40,
    },
    {
        id:2,
        name:"李四",
        age:20,
    },
];
/**
 * 查询所有未被删除的用户
 */
function getUnDeletedUsers(){
    return USERS.filter(function(user){
        return !user.deleted;
    });
}
export{
    getUnDeletedUsers,
    USERS,
}
