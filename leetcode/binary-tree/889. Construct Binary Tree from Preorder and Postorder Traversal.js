/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    return constructFromPrePostHelper(pre, 0, pre.length - 1, post, 0, post.length - 1);
};

var constructFromPrePostHelper = function(pre, preStart, preEnd, post, postStart, postEnd) {
    if(preStart > pre.length - 1 || postEnd < 0 || preStart > preEnd || postEnd < postStart) return null;

    if(preStart === preEnd) return new TreeNode(pre[preStart]);
    
    let root = new TreeNode(pre[preStart]);
    if(pre[preStart + 1] !== post[postEnd - 1]) {
        const leftRootPreIdx = preStart + 1, leftRootPostIdx = post.indexOf(pre[leftRootPreIdx]);
        const rightRootPostIdx = postEnd - 1, rightRootPreIdx = pre.indexOf(post[rightRootPostIdx]);
        root.left = constructFromPrePostHelper(pre, leftRootPreIdx, rightRootPreIdx - 1, post, postStart, leftRootPostIdx);
        root.right = constructFromPrePostHelper(pre, rightRootPreIdx, preEnd, post, leftRootPostIdx + 1, rightRootPostIdx);
    } else {
        root.left = constructFromPrePostHelper(pre, preStart + 1, preEnd, post, postStart, postEnd - 1);
    }
    return root;
};
