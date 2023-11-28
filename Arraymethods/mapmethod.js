let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Alice", "Charlie", "Emma"];
let birthyrs=['1999','1965','2004','1975','1996']

// looping over an array of names and converting them to lowercase
lowernames=names.map((ele)=>{
    return ele.toLowerCase()
})
console.table(lowernames);

// looping over an array and finding the age
let agearr=birthyrs.map((ele)=>{
    return eval(2023-ele)
})
console.log(agearr);

// applying filter method to filter the age greater than 45
elders=agearr.filter((age)=>age>45)
console.log(elders);