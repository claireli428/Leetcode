/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let queue = [root], reverse = false;
  let res = [];
  while (queue.length) {
    let len = queue.length;
    let temp = [];

    if (reverse) {
      while (len > 0) {
        let node = queue.pop();
        temp.push(node.val);
        if (node.right) queue.unshift(node.right);
        if (node.left) queue.unshift(node.left);
        len--;
      }
    } else {
      while (len > 0) {
        let node = queue.shift();
        temp.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        len--;
      }
    }

    res.push(temp);
    reverse = !reverse;
  }

  return res;
};
