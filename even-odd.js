let numarr=[10,11,21,9,2,19,32,45,17,11,13,10,3]
let evenarr=[]
let oddarr=[]
numarr.forEach((ele)=>{
    if(ele%2==0){
        evenarr.push(ele)
    }else if(ele%2!=0){
        oddarr.push(ele)
    }
})

console.log(`Even Elements:${evenarr}`);
console.log(`Odd Elements:${oddarr}`);