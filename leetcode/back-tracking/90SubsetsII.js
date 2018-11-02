/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = [], visited = [];
    let sortedNums = nums.sort((a, b) => { return a - b });
    helper(sortedNums, res, visited);
    return res;
};

var helper = function (nums, res, visited) {
    res.push(visited);

    for (let i = 0; i < nums.length;) {
        const start = i;
        while (i < nums.length - 1 && nums[i + 1] === nums[i]) i++;
        visited.push(nums[i]);
        helper(nums.slice(start + 1), res, visited.slice(0));
        visited.pop();
        i++;
    }
}
