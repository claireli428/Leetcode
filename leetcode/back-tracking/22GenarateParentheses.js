/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    helper(n, 0, 0, res, "")
    return res;
};

var helper = function (n, open, close, res, cur) {
    if (close === n) res.push(cur);

    if (open < n) helper(n, open + 1, close, res, cur + '(');
    if (close < open) helper(n, open, close + 1, res, cur + ')');
}
