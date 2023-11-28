// forEach() method
let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank"];

// using for loop
// for(let name of names){
//     console.log(`Name: ${name}`);
// }

// using forEach() 
// forEach() takes a callback function as an argument and calls it for every element of array.
names.forEach((ele,index,arr)=>console.log(`student name: ${ele}`)) //index and arr are optional parameters if we want we can take otherwise we can leave it.

