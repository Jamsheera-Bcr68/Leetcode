var containsNearbyDuplicate = function (nums, k) {
    let map = {}
    let count=1
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) {
            if (Math.abs(map[nums[i]] - i) <= k)return true
        }
       
            map[nums[i]] = i
        
        console.log(count,' step',map);
        count++
    }
    return false
};
let  nums = [1,2,3,1,2,3], k = 2
console.log(containsNearbyDuplicate(nums,k));
