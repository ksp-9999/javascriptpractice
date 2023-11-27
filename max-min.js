let numarr=[10,11,21,9,2,19,32,45,17,11,13,10,3]

let max=numarr.reduce((pre,cur)=>{
    return pre>cur?pre:cur
})

console.log(max);

let min=numarr.reduce((pre,cur)=>{
    return pre<cur?pre:cur
})
console.log(min);