/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null;

  if (val > root.val) return searchBST(root.right, val);
  if (val < root.val) return searchBST(root.left, val);
  return root;
};

var searchBST = function(root, val) {
  if (!root) return null;

  while (root) {
    if (val === root.val) return root;
    else if (val > root.val) root = root.right;
    else root = root.left;
  }

  return null;
};
