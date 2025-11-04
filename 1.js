var twoSum = function (nums, target) {
    let res = []
    let map=new Map()
    for (let i=0;i<nums.length;i++){
        let match=target-nums[i]
        if(map.hasOwnProperty(match)){
            res.push(i,map[match])
        }
        map[nums[i]]=i
    }
    return res
}
let nums=[2,7,11,15], target = 9
console.log(twoSum(nums,target))