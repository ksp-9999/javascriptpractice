let numarr=[10,11,21,9,2,19,32,43,45,17,11,13,10,3]
let firstlargest=Math.max(...numarr)
numarr.splice(numarr.indexOf(firstlargest),1)
let secondlargest=Math.max(...numarr)
console.log('second largest:'+secondlargest);


