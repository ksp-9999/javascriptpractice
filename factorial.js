let num=5

factorialarr=[]
while(num>0){
    factorialarr.unshift(num)
    num--
}

fact=factorialarr.reduce((pre,cur)=>{
    return pre=pre*cur
})
console.log(fact);
