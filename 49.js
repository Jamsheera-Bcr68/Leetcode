var groupAnagrams = function(strs) {
    let res=[]
    let set=new Set()
    for(let i=0;i<strs.length;i++){
       
      let word=strs[i].split('').sort().join('')
       if(set.has(word))continue
        set.add(word)
      let arr=strs.filter(s=>s.split('').sort().join('')==word)

      
        res.push(arr)
    }
    return res
};

let strs = ['a']//["eat","tea","tan","ate","nat","bat"]

//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs));
