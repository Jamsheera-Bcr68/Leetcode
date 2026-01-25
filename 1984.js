var minimumDifference = function(nums, k) {
nums=nums.sort((a,b)=>a-b)
return nums[nums.length-1]-nums[nums.length-k]
};
//let nums = [9,4,1,7], k = 2
let nums = [90], k = 1
console.log(minimumDifference(nums,k));
