var removeAnagrams = function(words) {
    for(let i=0;i<words.length-1;i++){
        let word1=words[i].split('').sort().join('')
        let word2=words[i+1].split('').sort().join('')

        let isAnagram=word1===word2
                console.log(word1,word2,isAnagram)
        if(isAnagram){
            words.splice(i+1,1)
            console.log('words',words)
            i--
        }
        
    }
    return words
};
let words = ["abba","baba","bbaa","cd","cd"]
console.log(removeAnagrams(words))

