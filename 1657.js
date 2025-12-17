var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false
    let map1={}
    let map2={}
    for(let ch of word1)map1[ch]=(map1[ch]||0)+1
    for(let ch of word2)map2[ch]=(map2[ch]||0)+1
    let key1 = Object.keys(map1)
    let key2=Object.keys(map2)
    console.log('keys',key1,key2);
    
    if (key1.sort().join('') !== key2.sort().join('')) return false
    console.log('not equal');
    
   let value1=Object.values(map1).sort((a,b)=>a-b)
   let value2=Object.values(map2).sort((a,b)=>a-b)
   console.log('values',value1,value2);
   
   return value1.join('')===value2.join('')
};
let  word1 ="abc", word2 = "bca"
console.log(closeStrings(word1,word2));
