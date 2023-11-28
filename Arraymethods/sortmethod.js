let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Alice", "Charlie", "Emma"];
let names2=[...new Set(["Alice", "bob", "Charlie", "david", "Emma", "frank", "Alice", "charlie", "emma"])]
let points=[12,21,32,45,55,71,26,83,14]
// sorting an array using sort()
sorted=names.sort()
console.log(names);

// sorting an array in ascending order using sort()
points.sort((a,b)=>a-b)
console.log(points);

// sorting an array in descending order using sort()
points.sort((a,b)=>b-a)
console.log(points);

// sorting an array having both uppercase and lowercase words.
names2.sort((a,b)=>{
    a.toLowerCase()
    b.toUpperCase()
    if(a<b){
        return -1
    }else{
        return 1
    }
})

console.log(names2);
