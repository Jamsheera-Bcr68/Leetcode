let digits=[1,2,3]
    let n=digits.map(d=>d.toString()).join('')
    n=parseInt(n)+1
    

    n= n.toString().split('').map(n=>Number(n))
console.log(n)