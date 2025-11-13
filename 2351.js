var repeatedCharacter = function(s) {
    console.log('hello',s);
    
    for(let i=0;i<s.length;i++){
        console.log('ch:',s[i]);
        
        if(s[i]==s[i+1]){
            console.log('letter',[i]);
            
            return s[i]
        }
    }
};

console.log(repeatedCharacter('abccbaacz'));
