let namesArray = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
// some method in javascript
console.log(namesArray.every((ele)=>{
    if(ele.length>2){
        return true
    }else{
        return false
    }
}));
