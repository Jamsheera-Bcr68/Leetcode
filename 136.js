var singleNumber = function(nums) {
    let map={}
    for(let num of nums){
        if(!map[num])map[num]=1
        else map[num]++
    }
    for(let num in map){
        if(map[num]==1){
            return typeof num
        }
    }
    return map
};
console.log(singleNumber([4,1,2,1,2]))