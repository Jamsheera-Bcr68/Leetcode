let s = "bcbbbcba";
// var maximumLengthSubstring = function (s) {
//   let res = "";
//     let left=0
//     let right=0
//   let map = {};
//   for ( right = 0; right < s.length; right++) {
//     let ch=s[right]
//     map[ch]=(map[ch]||0)+1
//    while(map[ch]>2){
//     map[s[left]]--
//     left++
//    }
    
//   }
//   return right-left
// };

// console.log(maximumLengthSubstring(s));
var maximumLengthSubstring = function(s) {
  
  let start=0
  let  right=0
  let map={}
  let maxlength=0
   for(right=0;right<s.length;right++){
    let ch=s[right]
    map[ch]=(map[ch]||0)+1
    while(map[ch]>2){
        map[s[start]]--
        start++
    }
    if(maxlength<(right-start))maxlength=(right-start)
    console.log(s.slice(start,right),map)
   } 
   return maxlength+1
};
console.log(maximumLengthSubstring(s));