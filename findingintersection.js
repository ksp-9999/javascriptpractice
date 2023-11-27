let arr1=[10,11,21,9,2,19,32,45,17,11,13,10,3]
let arr2=[1,2,11,5,34,32,45,7,9,8,13,21,20]
arr1set=new Set(arr1)
intersection=[]
for(let ele of arr1set){
    if(arr2.includes(ele)){
        intersection.push(ele)
    }
}
console.log(intersection);
