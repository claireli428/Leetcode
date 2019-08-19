/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return root;
    return helper(root.left, root.right);
};

var helper = function(left, right) {
    if(!left || !right) return left == right
    if(left.val !== right.val) return false;

    return helper(left.right, right.left) && helper(left.left, right.right);
};
