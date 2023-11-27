let arr1=[10,11,21,9,2,19,32,45,17,11,13,10,3]
let arr2=[1,2,11,5,34,32,45,7,9,8,13,21,20]
unarr=[...arr1,...arr2]
unarr=[...new Set(unarr)]
console.log(unarr);