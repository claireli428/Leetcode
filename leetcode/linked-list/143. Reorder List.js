/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let dummyL = new ListNode(0);
  dummyL.next = head;
  let fast = dummyL, slow = dummyL;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  //reverse right half
  let dummyR = new ListNode(0);
  dummyR.next = slow.next;

  fast = dummyR.next;
  while (fast && fast.next) {
    let temp = fast.next;
    fast.next = fast.next.next;
    temp.next = dummyR.next;
    dummyR.next = temp;
  }


  slow.next = null;

  //insert right into left
  slow = dummyL.next;
  while (dummyR.next) {
    fast = dummyR.next;
    dummyR.next = dummyR.next.next;
    fast.next = slow.next;
    slow.next = fast;
    slow = slow.next.next;
  }

};
