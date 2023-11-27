str='1881'
revstrarr=[]
for(let char of str){
    revstrarr.unshift(char)
}
revstr=revstrarr.join('')
if(revstr===str){
    console.log(`${str} is palindrome`);
}else{
    console.log(`${str} is not palindrome`);
}
