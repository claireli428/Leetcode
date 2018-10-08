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
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0), pointer = res, sum = 0;

    while(l1 || l2 || sum) {
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        pointer.next = new ListNode(sum % 10);
        pointer = pointer.next;
        sum = Math.floor(sum/10);
    }

    return res.next;
    
};
