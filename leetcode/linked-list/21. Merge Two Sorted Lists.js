/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode();
    let pointer = dummy;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            pointer.next = new ListNode(l2.val);
            l2 = l2.next;
        } else {
            pointer.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        pointer = pointer.next;
    }

    if(l1) {
        pointer.next = l1;
    }

    if(l2) {
        pointer.next = l2;
    }

    return dummy.next;
};