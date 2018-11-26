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
var rob = function (root) {
  let robbed = new Map();
  return helper(root, robbed);
};

var helper = function (root, robbed) {
  if (!root) return 0;
  
  if (robbed.has(root)) return robbed.get(root);

  let robRoot = root.val;
  if(root.left) robRoot += helper(root.left.left, robbed) + helper(root.left.right, robbed);
  if(root.right) robRoot += helper(root.right.left, robbed) + helper(root.right.right, robbed);
  
  const notRobRoot = helper(root.left, robbed) + helper(root.right, robbed);

  const res = Math.max(robRoot, notRobRoot);
  robbed.set(root, res)
  return res;
}
