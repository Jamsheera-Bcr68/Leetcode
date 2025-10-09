// var sumIndicesWithKSetBits = function(nums, k) {
//     let newInd=nums.map((num,index)=>index.toString(2).split('').map((a=>parseInt(a))))
//    let newArr=[]
//    let sum=0
//    for(let i=0;i<nums.length;i++){
//     let s=newInd[i].reduce((t,a)=>t+a,0)
//     if(s==k){
//         sum+=nums[i]
//     }
//    }
//     return sum
// }
var sumIndicesWithKSetBits = function(nums, k) {
    let indArr=nums.map((num,index)=>index.toString(2).split('').map(ind=>parseInt(ind)))
    let sum=0
    for(let i=0;i<nums.length;i++){
        let indSum=indArr.reduce((acc,ind)=>acc+ind,0)
        if(indSum==k)sum+=nums[i]
    }
    return sum
};

console.log(sumIndicesWithKSetBits([5,10,1,5,2],1))
