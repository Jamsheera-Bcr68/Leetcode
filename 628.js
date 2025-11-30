var maximumProduct = function (nums) {
    let n=nums.length
  nums = nums.sort((a, b) => a-b );
let res1=nums[0]*nums[1]*nums[n-1]
let res2=nums[n-2]*nums[n-3]*nums[n-1]
  return Math.max(res1,res2);
};
let  nums = [-1,-3,-2]
 console.log(maximumProduct(nums));
 