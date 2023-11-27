let num=12
isprime=false
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        isprime=true
    }
}
isprime?console.log(`${num} is composite`):console.log(`${num} is  prime`);;