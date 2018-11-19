/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    if(val > root.val) {
        root.right = insertIntoBST(root.right, val);
    } else {
        root.left = insertIntoBST(root.left, val);
    }

    return root;
};

var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    let cur = root;
    while(cur) {
        if(val > cur.val) {
            if(!cur.right) {
                cur.right = new TreeNode(val);
                break;
            } else {
                cur = cur.right;
            }
        } else {
            if(!cur.left) {
                cur.left = new TreeNode(val);
                break;
            } else {
                cur = cur.left;
            }
        }
    }

    return root;
};
