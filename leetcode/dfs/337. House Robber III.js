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

//Solution 1
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

//Solution 2
var rob = function (root) {
  let res = dfs(root);
  return Math.max(res[0], res[1]);
};

var dfs = function (root) {
  if (!root) return [0, 0];

  const left = dfs(root.left), right = dfs(root.right);

  const robRoot = root.val + left[1] + right[1];
  const notRobRoot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

  return [robRoot, notRobRoot];
}
