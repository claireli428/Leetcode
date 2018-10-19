/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return [];

    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};

//DFS
var preorderTraversal = function(root) {
    if(!root) return [];

    let stack = [root], res = [];
    while(stack.length) {
        let top = stack.pop();
        res.push(top.val);

        if(top.right) stack.push(top.right);
        if(top.left) stack.push(top.left);
    }

    return res;
};
