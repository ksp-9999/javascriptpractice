let str='saiprasad'
vowels=['a','e','i','o','u']
strvowels=[]
strconsonents=[]
function findvowels(str){
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            strvowels.unshift(char)
        }else{
            strconsonents.unshift(char)
        }
    }
}
findvowels(str)
console.log([...new Set(strvowels)]);
console.log([...new Set(strconsonents)]);