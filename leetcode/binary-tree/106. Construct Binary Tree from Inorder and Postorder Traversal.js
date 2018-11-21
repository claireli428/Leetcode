/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return buildTreeHelper(inorder, 0, inorder.length - 1, postorder, postorder.length - 1);
};

var buildTreeHelper = function(inorder, inStart, inEnd, postorder, postEnd) {
    if(postEnd < 0 || inStart > inEnd) return null;

    let root = new TreeNode(postorder[postEnd]);
    const rootInIdx = inorder.indexOf(postorder[postEnd]);
    root.left = buildTreeHelper(inorder, inStart, rootInIdx - 1, postorder, postEnd - (inEnd - rootInIdx) - 1);
    root.right = buildTreeHelper(inorder, rootInIdx + 1, inEnd, postorder, postEnd - 1);
    return root;
};
