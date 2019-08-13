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
var reverseKGroup = function(head, k) {
    if(!head) return head;
    
    let dummy = new ListNode();
    dummy.next = head;
    let pre = dummy;
    let cur = head;
    
    while (cur) {
        let count = 0;
        let ptr = cur;
        while (ptr && count < k) {
            count++;
            ptr = ptr.next;
        }
        
        if(count < k) break;
        
        for(let i = 1; i < k; i++) {
            let temp = cur.next;
            cur.next = temp.next;
            temp.next = pre.next;
            pre.next = temp;
        }
        pre = cur;
        cur = cur.next;
    } 
    
    return dummy.next;

};
