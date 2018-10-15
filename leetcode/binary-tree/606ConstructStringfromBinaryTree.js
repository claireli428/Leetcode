/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    if (!t) return '';

    if (!t.left && !t.right) return t.val + '';

    if (!t.right) return t.val + '(' + tree2str(t.left) + ')';

    if (!t.left) return t.val + '()(' + tree2str(t.right) + ')'

    return t.val + '(' + tree2str(t.left) + ')(' + tree2str(t.right) + ')';
};

//DFS
var tree2str = function (t) {
    if (!t) return '';

    let res = '', stack = [t];
    while (stack.length) {
        let top = stack.pop();

        if (top === ')') {
            res += ')';
            continue;
        }

        if (!top.left && !top.right) {
            res += '(' + top.val + ')';
            continue;
        };

        res += '(' + top.val;
        stack.push(')');

        if (top.right) stack.push(top.right);

        if (top.left) {
            stack.push(top.left);
        } else {
            res += '()';
        }
    }

    return res.slice(1, res.length - 1);
};
