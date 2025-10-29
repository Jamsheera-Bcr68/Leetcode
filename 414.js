var thirdMax = function(nums) 
{
    let arr=[...new Set(nums)]
    arr=arr.sort((a,b)=>b-a)
    console.log(arr,'length=',arr.length)
 if (arr.length<3) {
    return arr[0]
 }else return arr[2]
};
let  nums = [2,1]
console.log(thirdMax(nums))