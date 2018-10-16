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
var postorderTraversal = function(root) {
    if(!root) return [];

    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};

//DFS
var postorderTraversal = function(root) {
    if(!root) return [];

    let res = [], stack = [root], visited = new Set();
    while(stack.length) {
        let top = stack[stack.length - 1];

        if((!top.left && !top.right) || visited.has(top)) {
            res.push(top.val);
            stack.pop();
            continue;
        }
        
        if(top.right) stack.push(top.right);
        if(top.left) stack.push(top.left);

        visited.add(top);
    }

    return res;
};
