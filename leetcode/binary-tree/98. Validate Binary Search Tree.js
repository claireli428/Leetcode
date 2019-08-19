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
var isValidBST = function(root) {
    if(!root) return true;

    return helper(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};

var helper = function (root, max, min) {
    if(!root) return true;

    if(root.val >= max || root.val <= min) return false;

    return helper(root.left, root.val, min) && helper(root.right, max, root.val);
};
