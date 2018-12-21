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
var minDepth = function (root) {
  if (!root) return 0;

  let queue = [root], level = 1;
  while (queue.length) {
    let len = queue.length;
    while (len) {
      let head = queue.shift();
      if (!head.left && !head.right) return level;
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
      len--;
    }
    level++;
  }

  return level;
};
