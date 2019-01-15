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
var reverseKGroup = function (head, k) {
  if (!head || k === 1) return head;

  let Dummy = new ListNode(0);
  Dummy.next = head;
  let dummy = Dummy;
  let tail = dummy.next;

  while (dummy.next) {
    //count k nodes
    let count = 0, ptr = dummy;
    while (ptr && ptr.next && count < k) {
      ptr = ptr.next;
      count++;
    }

    if (count < k) break;

    //remove tail from group
    dummy.next = dummy.next.next;

    //link rest list to tail
    tail.next = ptr.next;
    ptr.next = null;

    //reverse group
    let cur = dummy.next;
    while (cur && cur.next) {
      let temp = cur.next;
      cur.next = cur.next.next;
      temp.next = dummy.next;
      dummy.next = temp;
    }

    //link group to tail
    cur.next = tail;

    //update dummy & tail
    dummy = tail;
    tail = dummy.next;
  }

  return Dummy.next;
};
