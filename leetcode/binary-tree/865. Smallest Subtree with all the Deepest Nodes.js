/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
  if (!root) return root;

  let height = treeHeight(root);
  let leftH = treeHeight(root.left), rightH = treeHeight(root.right);

  if (leftH === height - 1 && rightH === height - 1) return root;
  if (leftH === height - 1) return subtreeWithAllDeepest(root.left);
  return subtreeWithAllDeepest(root.right);
};

var treeHeight = function (root) {
  if (!root) return 0;
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
};
