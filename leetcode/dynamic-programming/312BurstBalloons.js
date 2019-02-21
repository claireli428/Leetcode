/**
 * @param {number[]} nums
 * @return {number}
 * 
 * dp[i][j]: max coins yeilded by bursting ballons between i to j
 * i----------------k--------------j
 * dp[i][j] = max(dp[i][k] + nums[k] * nums[i] * nums[j] + dp[k+1][j], k = i+1 ... j-1)
 */
var maxCoins = function (nums) {
  let n = nums.length;
  let extendedNums = [1, ...nums, 1];
  let dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));

  for (let len = 1; len <= n; len++) {
    for (let i = 0; i < n + 2 - len; i++) {
      let j = i + len + 1;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + extendedNums[i] * extendedNums[k] * extendedNums[j]);
      }
    }
  }

  return dp[0][n + 1];
};
