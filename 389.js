let  s = "y", t = "yy"
var findTheDifference = function(s, t) {
  
  let ns=s.split('')
  for(let ch of ns){
   t= t.replace(ch,'')
    
  }
  return t
};
console.log(findTheDifference(s,t))
