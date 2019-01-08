/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(!candidates.length) return [];

    candidates.sort((a, b) => a - b);
    let res = [], current = [];
    helper(candidates, target, 0, 0, res, current);
    return res;
};

var helper = function(candidates, target, sum, start, res, current) {
  if(sum > target) return;

  if(sum === target) {
    res.push(current);
    return;
  }

  for(let i = start; i < candidates.length; i++) {
    current.push(candidates[i]);
    helper(candidates, target, sum + candidates[i], i, res, current.slice(0));
    current.pop();
  }

};
