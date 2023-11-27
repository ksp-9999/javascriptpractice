let num=14
factors=[]
for(let i=0;i<=num/2;i++){
    if(num%i==0){
        factors.push(i)
    }else{
        continue
    }
}
console.log(...factors);