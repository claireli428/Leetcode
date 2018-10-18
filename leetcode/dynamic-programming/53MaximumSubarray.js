/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums.length) return 0;

    let dp = [nums[0]], max = nums[0];

    for(let i = 1; i < nums.length; i++) {
        dp[i] = dp[i-1] > 0 ? dp[i-1]+nums[i] : nums[i];
        max = Math.max(max, dp[i]);
    }

    return max;
};
