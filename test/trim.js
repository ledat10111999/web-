function haha(x,y,param){
    
var obj = {
    Tên: "Đạt",
    Lớp : "17DTHC5",
    x: x,
    y:y
}
    param(obj);
    
}

haha(3,4,function(obj){
    console.log(obj);
    
})