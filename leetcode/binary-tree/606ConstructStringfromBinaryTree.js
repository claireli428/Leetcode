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

//DFS 1
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

//DFS 2
var tree2str = function (t) {
    if (!t) return '';

    let res = '', stack = [t], visited = new Set();
    while (stack.length) {
        let top = stack[stack.length - 1];
        if(visited.has(top)) {
            res += ')';
            stack.pop();
            continue;
        }

        res += '(' + top.val;
        visited.add(top);
        if(!top.left && !top.right) {
            res += ')';
            stack.pop();
        } else if (!top.left) {
            res += '()';
            stack.push(top.right);
        } else if (!top.right) {
            stack.push(top.left);
        } else {
            stack.push(top.right);
            stack.push(top.left);
        }
    }

    return res.slice(1, res.length - 1);
};
