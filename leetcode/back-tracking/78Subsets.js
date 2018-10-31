/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [], visited = [];
    let sortedNums = nums.sort((a, b) => { return a - b });
    helper(sortedNums, res, visited);
    return res;
};

var helper = function (nums, res, visited) {
    res.push(visited);

    for (let i = 0; i < nums.length; i++) {
        visited.push(nums[i]);
        helper(nums.slice(i+1), res, visited.slice(0));
        visited.pop();
    }
}
