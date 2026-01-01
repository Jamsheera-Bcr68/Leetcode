var romanToInt = function (s) {
  let map = { I: 1, X: 10, L: 50, V: 5, C: 100, D: 500, M: 1000 };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (map[ch] < map[s[i + 1]]) {
      num +=map[s[i+1]] - map[ch]
      i++
    } else num += map[ch];
  }
  return num;
};

let s = "MCMXCIV";
console.log(romanToInt(s));
//let s = "III"
 let map= {I:1,L:50,V:5,X:10,C:100,D:500,M:1000}
    let num = 0
    for (let i = 0; i < s.length; i++) {
        let ch=s[i]
        if(map[ch]<map[s[i+1]]){
            num+=(map[s[i+1]]-map[ch])
        }else num+=map[ch]
    }