let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Alice", "Charlie", "Emma"];

// creating a map
let namesmap= new Map([
    ['name','saiprasad'],
    ['age',25],
    ['email','sai@gmail.com'],
    ['mobile','56473839']
])

// looping over a map using forEach method.
namesmap.forEach((value,key,map)=>{console.log(`value:${value} key:${key}`);})


// creating a set
let namesset= new Set(names)

console.log('--------------------');
// looping over a set using forEach method.
namesset.forEach((ele)=>console.log(ele))