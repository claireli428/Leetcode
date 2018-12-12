/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dummy = new ListNode();
  dummy.next = head;
  let ptr = dummy;
  while (ptr.next && ptr.next.val < x) ptr = ptr.next;

  let cur = ptr.next;
  while (cur && cur.next) {
    if (cur.next.val < x) {
      let node = new ListNode(cur.next.val);
      cur.next = cur.next.next;
      node.next = ptr.next;
      ptr.next = node;
      ptr = ptr.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};
