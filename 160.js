// Definition for singly-linked list.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function addNode(node,head){
   
}
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let set = new Set();
  let first = headA;
  let second = headB;
  while (first) {
    set.add(first);
    first = first.next;
  }
  while (second) {
    if (set.has(second)) {
      return second.val;
    }
    second = second.next;
  }
  return null;
};
