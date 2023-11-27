let nums=[1,2,8,2,9,8,2,9]
let duplicatearray=nums.filter((ele,index,arr)=>{
    return arr.slice(index+1,).includes(ele)
})
console.log([...new Set(duplicatearray)]);