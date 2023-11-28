let points=[13,21,32,45,55,71,26,83,14]


// unlike all other transformation methods the callback function of the reduce method takes four parameters, reduce((acc,ele,index,arr)=>{....}) and the reduce method takes the two arguments reduce(callback, initialvalueofacc)

// finding minimum
minpoints=points.reduce((acc,ele)=>{
    return acc>ele?ele:acc
},points[0])
console.log(minpoints);

// finding max
maxpoints=points.reduce((acc,ele)=>{
    return acc<ele?ele:acc
},points[0])
console.log(maxpoints);


// score
score=console.log(points.reduce((sum,ele)=>sum+ele,0));