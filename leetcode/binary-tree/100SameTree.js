/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true;

    if(!p || !q) return false;

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSameTree = function(p, q) {
    if(!p && !q) return true;

    if(!p || !q) return false;

    let queue1 = [p], queue2 = [q];
    while(queue1.length) {
        const head1 = queue1.shift();
        const head2 = queue2.shift();

        if(!head1 && !head2) continue;

        if(!head1 || !head2) return false;

        if(head1.val !== head2.val) return false;

        queue1.push(head1.left);
        queue1.push(head1.right);
        queue2.push(head2.left);
        queue2.push(head2.right);

    }

    return true;
};
