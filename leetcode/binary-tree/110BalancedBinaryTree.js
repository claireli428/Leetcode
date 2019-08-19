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
var isBalanced = function (root) {
    if (!root) return true;

    // return getBalancedHeight(root) !== -1;

    let leftH = getHeight(root.left);
    let rightH = getHeight(root.right);

    if (Math.abs(leftH - rightH) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};

var getHeight = function (root) {
    if (!root) return 0;

    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};

var getBalancedHeight = function (root) {
    if (!root) return 0;

    let left = getBalancedHeight(root.left);
    if (left === -1) return -1;

    let right = getBalancedHeight(root.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
};
