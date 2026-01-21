let s = "A man, a plan, a canal: Panama"
//  s=s.toLowerCase().trim().split('').filter(ch=>ch.charCodeAt()>=97&&ch.charCodeAt()<=122).join('')
//  let stack=s.split('').reverse().join('')
 
 

 
//  console.log(stack===s);
 


var isPalindrome = function(s) {
    let stack=s.toLowerCase().trim().split('')

    function rev(stack){
        if(!stack.length)return ''
        let res=stack.pop()
        return res+rev(stack)
    }
    let result=rev(stack)
    return result===s
};



 
console.log(isPalindrome(s));

