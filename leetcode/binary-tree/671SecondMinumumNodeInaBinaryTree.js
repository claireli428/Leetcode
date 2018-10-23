/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    if(!root || !root.left) return -1;

    const left = root.left.val === root.val ? findSecondMinimumValue(root.left) : root.left.val;
    const right = root.right.val === root.val ? findSecondMinimumValue(root.right) : root.right.val;

    if(left === -1) return right;
    if(right === -1) return left;
    return Math.min(left, right);
};
