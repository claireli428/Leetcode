/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [], path = [];
  helper(k, n, 1, 0, path, res);
  return res;
};

var helper = function (k, n, start, sum, path, res) {
  if (path.length >= k) {
    if (sum === n) res.push(path);
    return;
  }

  for (let i = start; i <= 9; i++) {
    path.push(i);
    helper(k, n, i + 1, sum + i, path.slice(0), res);
    path.pop();
  }
};
