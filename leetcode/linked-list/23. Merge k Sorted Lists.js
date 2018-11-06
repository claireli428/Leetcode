/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return [];
    if(lists.length === 1) return lists[0];

    let middle = Math.floor(lists.length/2);
    let left = mergeKLists(lists.slice(0, middle));
    let right = mergeKLists(lists.slice(middle));
    return mergeTwoLists(left, right);
};

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