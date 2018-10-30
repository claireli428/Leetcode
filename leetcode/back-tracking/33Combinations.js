/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = [], visited = [];
    helper(n, k, 1, res, visited);
    return res;
};

var helper = function (n, count, start, res, visited) {
    if (count === 0) {
        res.push(visited);
        return;
    }

    for (let num = start; num <= n; num++) {
        visited.push(num);
        helper(n, count - 1, num + 1, res, visited.slice(0));
        visited.pop();
    }
}
