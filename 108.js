
 class TreeNode{
    constructor(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
 }
var sortedArrayToBST = function(nums) {
    if(nums.length==1)return new TreeNode(nums[0])
    let n=nums.length
    let mid=Math.floor(n/2)
    let root=new TreeNode(nums[mid])
    root.left=sortedArrayToBST(nums.slice(0,mid))
    root.right=sortedArrayToBST(nums.slice(mid))
    return root
};
 nums = [-10,-3,0,5,9]
console.log(sortedArrayToBST(nums));
