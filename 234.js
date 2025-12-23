var isPalindrome = function (head) {
  let res = "";
  let rev = "";
  let node = head;
  function isPalindrome(node) {
    if (!node) return "";
    res+=node.val
    isPalindrome(node.next);
    console.log(node.val);
    rev=rev+=node.val
  }
  isPalindrome(node);
  console.log(`rev`, rev, `res ${res}`);

  return res === rev;
};
let arr = [1, 2, 2, 1];
class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);
console.log(isPalindrome(head));

