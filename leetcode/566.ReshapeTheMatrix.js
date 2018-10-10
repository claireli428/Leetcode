/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    if (nums.length * nums[0].length !== r * c)
        return nums;

    let res = Array.apply(null, { length: r }).map(() => new Array(c)), m = nums[0].length;
    for (let i = 0; i < r * c; i++) {
        res[Math.floor(i / c)][i % c] = nums[Math.floor(i / m)][i % m];
    }

    return res;
};
