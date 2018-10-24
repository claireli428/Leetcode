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
var findSecondMinimumValue = function(root) {
    if(!root || !root.left) return -1;

    const left = root.left.val === root.val ? findSecondMinimumValue(root.left) : root.left.val;
    const right = root.right.val === root.val ? findSecondMinimumValue(root.right) : root.right.val;

    if(left === -1) return right;
    if(right === -1) return left;
    return Math.min(left, right);
};

//DFS
var findSecondMinimumValue = function(root) {
    if(!root || !root.left) return -1;

    let stack = [root], secondMin = Math.max(root.left.val, root.right.val);
    while(stack.length) {
        const top = stack.pop();

        if(!top.left && top.val > root.val && top.val < secondMin) secondMin = top.val; 

        if(top.left) {
            const max = Math.max(top.left.val, top.right.val)
            if(max > root.val && max < secondMin) secondMin = max;
            stack.push(top.right);
            stack.push(top.left);
        }
    }

    return secondMin === root.val ? -1 : secondMin;
};
