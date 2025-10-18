var findMissingAndRepeatedValues = function(grid) {
    let arr=grid.flat()
    let s=new Set()
    let res=[]
    for(let num of arr){
        if(s.has(num)){
            res.push(num)
            break
        }else{
            s.add(num)
        }
    }
    arr=arr.sort((a,b)=>a-b)
    let arrSum=[...new Set(arr)].reduce((acc,num)=>acc+num)
    let sum=arr.length*(arr.length+1)/2
    res.push(sum-arrSum)
 
    
    return res

};
console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))