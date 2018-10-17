/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false;

    if (root.val === sum && !root.left && !root.right) return true;

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

var hasPathSum = function (root, sum) {
    if (!root) return false;

    let stack = [root], sums = [sum];
    while (stack.length) {
        let top = stack.pop();
        sum = sums.pop();

        if(!top.left && !top.right && top.val === sum) return true;

        if(top.left) {
            stack.push(top.left);
            sums.push(sum - top.val);
        }

        if(top.right) {
            stack.push(top.right);
            sums.push(sum - top.val);
        }

    }

    return false;
};
