let title= "First leTTeR of EACH Word"
let s=title.split(' ').map(w=>{
    if(w.length<=2)return w.toLowerCase()
    else return w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()
}).join(' ')
console.log(s);
