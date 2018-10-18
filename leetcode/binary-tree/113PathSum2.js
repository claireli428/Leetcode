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
 * @return {number[][]}
 */
var helper = function (root, sum, res, path) {
    if (!root.left && !root.right) {
        if (root.val === sum) res.push([...path, root.val]);
        return;
    };

    sum -= root.val;
    path = [...path, root.val];
    if (root.left) helper(root.left, sum, res, path);
    if (root.right) helper(root.right, sum, res, path);
}

var pathSum = function (root, sum) {
    if (!root) return [];

    let res = [];
    helper(root, sum, res, []);
    return res;
};

//DFS
var pathSum = function (root, sum) {
    if (!root) return [];

    let stack = [root], res = [], sums = [sum], path = [], visited = new Set();
    while (stack.length) {
        let top = stack[stack.length - 1];
        let sum = sums[sums.length - 1];

        if (!top.left && !top.right) {
            stack.pop();
            visited.add(top);
            if (top.val === sum) res.push([...path, top.val]);
            continue;
        }

        if (visited.has(top.left) || visited.has(top.right)) {
            stack.pop();
            path.pop();
            sums.pop();
            visited.add(top);
            continue;
        }

        sums.push(sum - top.val);
        path.push(top.val);
        if (top.left) stack.push(top.left);
        if (top.right) stack.push(top.right);
    }

    return res;
};
