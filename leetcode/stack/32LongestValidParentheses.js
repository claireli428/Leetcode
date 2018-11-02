/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if (!s.length) return 0;

    let stack = [], start = -1, res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (!stack.length) {
            start = i;
        } else {
            stack.pop();
            if (!stack.length) {
                res = Math.max(res, i - start);
            } else {
                res = Math.max(res, i - stack[stack.length - 1]);
            }
        }
    }

    return res;
};
