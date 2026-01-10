class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var isBalanced = function (root) {
  function checkHight(node) {
    if (!node) return 0;
    let leftHight = 1 + checkHight(root.left);
    if (leftHight == -1) return -1;
    let rightHight = 1 + checkHight(root.right);
    if (rightHight == -1) return -1;

    if (Math.abs(leftHight - rightHight) > 1) return -1;
  }
  return checkHight(root) !== -1;
};
