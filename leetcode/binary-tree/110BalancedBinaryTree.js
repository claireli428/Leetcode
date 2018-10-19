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
    if (!root || (!root.left && !root.right)) return true;

    if (!root.left && root.right && (root.right.left || root.right.right)) return false;

    if (!root.right && root.left && (root.left.left || root.left.right)) return false;

    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(treeDepth(root.left) - treeDepth(root.right)) < 2
};

var treeDepth = function (root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    return 1 + Math.max(treeDepth(root.left), treeDepth(root.right));
}

var isBalanced = function (root) {
    return bottomUpHeight(root) !== -1
};

var bottomUpHeight = function (root) {
    if(!root) return 0;

    const leftH = bottomUpHeight(root.left);
    if(leftH === -1) return -1;
    const rightH = bottomUpHeight(root.right);
    if(rightH === -1) return -1;

    if(Math.abs(leftH - rightH) > 1) return -1;

    return Math.max(leftH, rightH) + 1;
}

