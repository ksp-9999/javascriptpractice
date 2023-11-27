let numarr=[10,11,21,9,2,19,32,45,17,11,13,10,3,4]

sum=numarr.reduce((pre,cur)=>{
    return pre=pre+cur
})
console.log(sum);