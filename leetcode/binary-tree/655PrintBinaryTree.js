/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
    if(!root) return [];

    const height = treeHeight(root), width = Math.pow(2, height)-1;
    let res = new Array(height).fill(null).map(() => new Array(width).fill(""));
    helper(root, 0, 0, width-1, res);
    return res;
};

var treeHeight = function(root) {
    if(!root) return 0;

    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}

var helper = function(root, level, left, right, res) {
    if(!root) return;

    let middle = Math.floor((left+right)/2);
    res[level][middle] = root.val + '';
    helper(root.left, level+1, left, middle-1, res);
    helper(root.right, level+1, middle+1, right, res);

}
