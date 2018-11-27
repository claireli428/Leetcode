/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return helper(root, p, q);
};

var helper = function (root, p, q) {
    if(!root) return null;

    let left = helper(root.left, p, q);
    let right = helper(root.right, p, q);

    if((left && right) || root === q || root === p) return root;
    if(left) return left;
    if(right) return right;

    return null;
};