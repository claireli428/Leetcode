/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */


var connect = function(root) {
    let dummy = new TreeLinkNode(0);
    let ptr = dummy;
    while(root) {
        if(root.left) {
            ptr.next = root.left;
            ptr = ptr.next;
        }
        if(root.right) {
            ptr.next = root.right;
            ptr = ptr.next;
        }

        if(root.next) {
            root = root.next;
        } else {
            root = dummy.next;
            dummy.next = null;
            ptr = dummy;
        }
    }
};

var connect = function(root) {
    if(root) {
        let queue = [root];
        while (queue.length) {
            let len = queue.length;
            while (len) {
                if(len > 1) {
                    queue[0].next = queue[1];
                }
                let node = queue.shift();
                len--;

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
    }
};