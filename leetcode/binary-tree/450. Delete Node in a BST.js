/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function(root, key) {
  let dummy = new TreeNode(Number.MIN_SAFE_INTEGER);
  dummy.right = root;
  deleteNodeHelper(dummy, root, key);
  return dummy.right;
};

var deleteNodeHelper = function(pre, cur, key) {
  if (!cur) return;

  if (cur.val === key) {
    if (cur.val > pre.val) {
      pre.right = appendTree(cur.left, cur.right);
    } else {
      pre.left = appendTree(cur.left, cur.right);
    }
  } else if (cur.val > key) {
    deleteNodeHelper(cur, cur.left, key);
  } else {
    deleteNodeHelper(cur, cur.right, key);
  }
};

var deleteNode = function(root, key) {
  if (!root) return null;

  let dummy = new TreeNode(Number.MIN_SAFE_INTEGER);
  dummy.right = root;

  let pre = dummy;
  while (pre.left || pre.right) {
    if (key > pre.val) {
      let cur = pre.right;
      if (!cur) break;

      if (cur.val === key) {
        pre.right = appendTree(cur.left, cur.right);
        break;
      } else {
        pre = cur;
      }
    } else {
      let cur = pre.left;
      if (!cur) break;

      if (cur.val === key) {
        pre.left = appendTree(cur.left, cur.right);
        break;
      } else {
        pre = cur;
      }
    }
  }

  return dummy.right;
};

var appendTree = function(left, right) {
  if (!right) return left;

  let ptr = right;
  while (ptr.left) ptr = ptr.left;
  ptr.left = left;
  return right;
};
