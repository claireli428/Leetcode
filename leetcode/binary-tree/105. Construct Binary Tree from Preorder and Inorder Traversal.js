/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return buildTreeHelper(preorder, 0, inorder, 0, inorder.length - 1);
};

var buildTreeHelper = function(preorder, preStart, inorder, inStart, inEnd) {
  if(preStart > preorder.length - 1 || inStart > inEnd) return null;

  let root = new TreeNode(preorder[preStart]);
  let rootInIdx = inorder.indexOf(preorder[preStart]);
  root.left = buildTreeHelper(preorder, preStart + 1, inorder, inStart, rootInIdx - 1);
  root.right = buildTreeHelper(preorder, preStart + rootInIdx - inStart + 1, inorder, rootInIdx + 1, inEnd);
  return root;
};
