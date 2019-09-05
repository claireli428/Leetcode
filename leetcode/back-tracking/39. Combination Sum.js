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


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    combinationSumDFS(candidates, res, target, [], 0);
    console.log(res);
    const finalRes = res.map(times => {
        let combination = [];
        times.forEach((e, i) => {
            combination = [...combination, ...new Array(e).fill(candidates[i])];
        });
        return combination;
    });
    return finalRes;
};

var combinationSumDFS = function (candidates, res, target, path, level) {
    if(target === 0) {
        res.push(path.slice(0));
        return;
    }
    
    if(level === candidates.length) return;

    for(let i = 0; i * candidates[level] <= target; i++) {
        path.push(i);
        combinationSumDFS(candidates, res, target - i * candidates[level], path, level + 1);
        path.pop();
    }
};
