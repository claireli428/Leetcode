/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if(n === 0) return [0];
    let res = [];
    helper(n, [], res, 0);
    return res;
};

var helper = function(n, path, res, flip) {
  if(path.length === n) {
    res.push(parseInt(path.join(''), 2));
    return;
  }

  let arr = flip ? [1, 0] : [0, 1];

  for(let i = 0; i < 2; i++) {
    path.push(arr[i]);
    helper(n, path, res, i);
    path.pop();
  }
};
