/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if(!headA || !headB) return null;
  let diff = 0;

  let fast = headA;
  while (fast) {
    fast = fast.next;
    diff++;
  }
  fast = headB;
  while (fast) {
    fast = fast.next;
    diff--;
  }

  fast = diff > 0 ? headA : headB;
  let slow = diff > 0 ? headB : headA;
  diff = Math.abs(diff);
  while (diff) {
    fast = fast.next;
    diff--;
  }

  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
};
