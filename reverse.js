str="madam"
revstr=[]
for(let char of str){
    revstr.unshift(char)
}
str=revstr.join('')
console.log(str);