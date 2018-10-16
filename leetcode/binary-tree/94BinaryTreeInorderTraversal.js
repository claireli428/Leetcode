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
var inorderTraversal = function(root) {
    if(!root) return [];

    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

//DFS
var inorderTraversal = function(root) {
    if(!root) return [];

    let res = [], stack = [root], visited = new Set();
    while(stack.length) {
        let top = stack.pop();

        if(!top.left) {
            res.push(top.val);
            visited.add(top);
            if(top.right) stack.push(top.right);
        } else if(visited.has(top.left)) {
            res.push(top.val);
            visited.add(top);
        } else {
            if(top.right) stack.push(top.right);
            stack.push(top);
            stack.push(top.left);
        }

    }

    return res;
};
