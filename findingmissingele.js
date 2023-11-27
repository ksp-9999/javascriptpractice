let arr=[1,2,3,5,6,7,9,10]
let missing=[]
for(let i=1;i<=10;i++){
    if(!arr.includes(i)){
        missing.push(i)
    }
}
console.log(missing);