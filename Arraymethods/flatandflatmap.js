let arr1=[10,20,[30,[40,[50,60]]],70,[80,90,100]]

// flattening an array

console.log(arr1.flat());
console.log(arr1.flat(2)); //depth = 2
console.log(arr1.flat(3)); //depth =3

let employees=[
    {'name':'john','skills':['html','css','javascript','bootstrap','jquery']},
    {'name':'sastry',skills:['corejava','sping framework','springboot','MySQL']},
    {'name':'yunus',skills:['aws','gcp','devops','python']}
]

skillarra=employees.map((ele)=>{
    return ele.skills
})
console.table(skillarra.flat());