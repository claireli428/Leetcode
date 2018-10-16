/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let res = [];
    helper(root, 0, res);
    return res;
};

var helper = function(root, level, res) {
    if(!root) return;

    if(!res[level]) {
        res[level] = [root.val];
    } else {
        res[level].push(root.val);
    }

    helper(root.left, level+1, res);
    helper(root.right, level+1, res);
}

//BFS
var levelOrder = function(root) {
    if (!root) return [];

    let res = [], queue = [root];
    while(queue.length) {
        let len = queue.length, level = [];
        while(len) {
            let head = queue.shift();
            len--;
            level.push(head.val);
            
            if(head.left) queue.push(head.left);
            if(head.right) queue.push(head.right);
        }
        res.push(level);
    }

    return res;
};

