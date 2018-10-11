/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(!root)  return[];

    let res = [];
    helper(root, 0, res);

    return res.map((r) => {return r[0] / r[1]});
};

var helper = function(root, level, res) {
    if(!root) return;

    if(!res[level])
        res[level] = [root.val, 1];
    else
        res[level] = [res[level][0]+root.val, res[level][1]+1];
    
    helper(root.left, level+1, res);
    helper(root.right, level+1, res);
}

var averageOfLevels = function(root) {
    if(!root)  return[];

    let res = [];
    let queue = [root];
    while(queue.length) {
        let size = queue.length, sum = 0, divisor = size;
        while(size > 0) {
            const node = queue.shift();
            size--;
            sum += node.val;

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
        res.push(sum / divisor);
    }

    return res;
};
