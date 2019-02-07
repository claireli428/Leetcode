/**
 * Given an integer array nums with all positive numbers and no duplicates,
 * find the number of possible combinations that add up to a positive integer target.
 * 
 * Example
 * Given nums = [1, 2, 4], target = 4
 * The possible combination ways are
 * [1, 1, 1, 1] 
 * [1, 1, 2] 
 * [1, 2, 1] 
 * [2, 1, 1] 
 * [2, 2]
 * [4]
 * return 6
 * 
 * dp[j] = Sum(dp[j - A[i]]) (i = 0 ... nums.length - 1, if i >= A[i]);
 */

var backPackIV = function (nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  
  for(let j = 1; j <= target; j++) {
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] <= j) dp[j] += dp[j - nums[i]];
    }
  }

  return dp[target];
};
