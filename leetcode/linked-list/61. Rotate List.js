/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) return head;

  let ptr = head, len = 1;
  while (ptr && ptr.next) {
    ptr = ptr.next;
    len++;
  }
  ptr.next = head;

  k %= len;
  k = len - k - 1;
  ptr = head;
  while(k) {
    ptr = ptr.next;
    k--;
  }

  let dummy = new ListNode(0);
  dummy.next = ptr.next;
  ptr.next = null;
  return dummy.next;
};
