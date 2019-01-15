/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let fast = head, slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if(fast) slow = slow.next;

  let dummy = new ListNode(0);
  dummy.next = slow;
  while(slow && slow.next) {
    let temp = slow.next;
    slow.next = slow.next.next;
    temp.next = dummy.next;
    dummy.next = temp;
  }

  fast = head, slow = dummy.next;
  while(slow) {
    if(fast.val !== slow.val) return false;
    fast = fast.next;
    slow = slow.next;
  }

  return true;

};
