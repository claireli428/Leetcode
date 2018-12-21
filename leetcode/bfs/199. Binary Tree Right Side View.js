/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  let res = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    while (len) {
      let head = queue.shift();
      if (len === 1) res.push(head.val);

      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
      len--;
    }
  }

  return res;
};
