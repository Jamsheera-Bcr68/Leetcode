var mostFrequent = function (nums, key) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == key) {
      let target = nums[i + 1];
      map[target] = (map[target] || 0) + 1;
    }
  }
  let count = 0;
  let maxKey;
  for (let key in map) {
    if (map[key] > count) {
      maxKey = key;
      count = map[key];
    }
  }
  return maxKey;
};
let   nums = [2,2,2,2,3], key = 2
console.log(mostFrequent(nums,key))