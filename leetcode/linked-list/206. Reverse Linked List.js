/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head;
    
//     let dummy = new ListNode();
//     dummy.next = head;
    
//     let cur = head;
//     while(cur.next) {
//         let temp = cur.next;
//         cur.next = temp.next;
//         temp.next = dummy.next;
//         dummy.next = temp;
//     }
    
//     return dummy.next;
    
    let pre = null;
    let cur = head;
    while(cur.next) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    
    cur.next = pre;
    return cur;
    
};
