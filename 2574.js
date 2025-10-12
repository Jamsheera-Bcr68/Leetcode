/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftArr=[]
    let rightArr=[]
    let num=0
    for(let i=0;i<nums.length;i++){
        leftArr.push(num)
        num+=nums[i]
    }
     num=0
    for(let i=nums.length-1;i>=0;i--){
        rightArr.unshift(num)
        num+=nums[i]
    }
    let res=[]
    for(let i=0;i<nums.length;i++){
        res.push(Math.abs(leftArr[i]-rightArr[i]))
    }
    return res
};