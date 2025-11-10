var numberOfPairs = function (nums) {
  let pairCount = 0;
  let leftCount = 0;
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] == 2) {
      map[num] = 0;
      pairCount++;
    }
    console.log(map);
  }
  for(let key in map){
      if(map[key]==1)leftCount++
  }
  let res=[pairCount,leftCount]
  return res
};
console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
