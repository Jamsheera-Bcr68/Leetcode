var arithmeticTriplets = function(nums, diff) {
    let count=0
   let s=new Set(nums)
   for(let num of nums){
    if(s.has(num+diff)&&s.has(num+2*diff)){
        count++
    }
   }
   return count
};
let nums = [0,1,4,6,7,10], diff = 3//Output: 2
console.log(arithmeticTriplets(nums,diff));
