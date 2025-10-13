var getCommon = function(nums1, nums2) {
 let set=new Set([...nums1])
let common=[]
 for(let num of nums2){
    if(set.has(num))common.push(num)
 }
if(common.length===0)return -1
return Math.min(...common)
};
var getCommon = function(nums1, nums2) {

let s1=new Set(nums1)
let common=nums2.filter(num=>s1.has(num))
if(common.length==0)return -1
else{
    return Math.min(...common)
}


};