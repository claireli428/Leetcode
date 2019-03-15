/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * if equal sum exist, the question is converted to can we fill a backpack with volumn sum
 * dp[i][j]: can fill volumn j with first i nums
 * dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]](if j >= nums[i-1])
 */
var canPartition = function (nums) {
  if (nums.length === 1) return false;

  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];

  if (sum % 2 !== 0) return false;

  sum /= 2;

  let dp = new Array(sum + 1).fill(false);
  dp[0] = true;

  if(nums[0] <= sum) dp[nums[0]] = true;

  for (let i = 2; i <= nums.length; i++) {
    for (let j = sum; j > 0; j--) {
      if (j > nums[i - 1]) dp[j] |= dp[j - nums[i - 1]];
    }
  }

  return dp[sum];
};
