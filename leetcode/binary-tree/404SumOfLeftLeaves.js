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
var sumOfLeftLeaves = function (root) {
    if (!root)
        return 0;

    if (root.left && !root.left.left && !root.left.right)
        return root.left.val + sumOfLeftLeaves(root.right);

    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

//BFS solution
var sumOfLeftLeaves = function (root) {
    if (!root)
        return 0;

    var res = 0, queue = [root];
    while (queue.length) {
        var node = queue.shift();
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                res += node.left.val;
            } else {
                queue.push(node.left);
            }
        }
        if (node.right) {
            queue.push(node.right);
        }
    }

    return res;

};


