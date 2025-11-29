var findErrorNums = function(nums) {
   
    let missingNumber=null
    let repeatNumber=null
    let map=new Set()
    for(let i=1;i<=nums.length;i++){
    
        if(map.has(nums[i]))repeatNumber=nums[i]
        else map.add(nums[i])
    }
    console.log(repeatNumber);
    
    for(let i=1;i<=nums.length;i++){
        if(!map.has(i))missingNumber=i
    }
    return [repeatNumber,missingNumber]
};
let nums = [1,2,2,4]
console.log(findErrorNums(nums));
