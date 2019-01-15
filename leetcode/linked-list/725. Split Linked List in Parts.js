/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  let ptr = root, len = 0;
  while (ptr) {
    ptr = ptr.next;
    len++;
  }

  let count = Math.floor(len / k);
  len %= k;

  ptr = root;
  let res = [];
  while (k) {
    let n = len > 0 ? count + 1 : count;
    len--;
    k--

    if(n === 0) {
      res.push(null);
      continue;
    }

    let head = ptr;
    while (n - 1) {
      ptr = ptr.next;
      n--;
    }
    let temp = ptr.next;
    ptr.next = null;
    res.push(head);
    ptr = temp;
  }

  return res;
};
