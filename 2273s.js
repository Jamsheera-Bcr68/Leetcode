var removeAnagrams = function (words) {
  let arr = words.map((w) => w.split("").sort().join(""));

  for (let i = 1; i < words.length; i++) {
    if (arr[i] == arr[i - 1]) {
      words.splice(i, 1);
      arr.splice(i, 1);
      console.log(words);

      i--;
    }
  }
  return words;
};
console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    for(let i=0;i<words.length-1;i++){
        let word1=words[i].split('').sort().join('')
        let word2=words[i+1].split('').sort().join('')
        let isAnagram=word1===word2
        if(isAnagram){
            words.splice(i+1,1)
            i--
        }
        
    }
    return words
};