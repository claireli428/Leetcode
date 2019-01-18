/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n + 1) * n / 2;
    for(let i = 0; i < n; i++) {
        sum -= nums[i];
    }
    
    return sum;
};
