/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let res = 0;
  if (m === 1) {
    for (let i = 0; i < nums.length; i++) res += nums[i];
    return res;
  }

  res = Number.MAX_SAFE_INTEGER;
  for (let l = 1; l <= nums.length - m + 1; l++) {
    let sum1 = 0;
    for (let i = 0; i < l; i++) sum1 += nums[i];

    let sum2 = splitArray(nums.slice(l), m - 1);
    res = Math.min(res, Math.max(sum1, sum2));
  }

  return res;
};

/**
 * DP
 * dp[i][j]: minumum of largest sum for first i nums splitting to j subarrays, where i >= j
 * dp[i][j] = Min(dp[i][j], Max(dp[l][j-1], Sum(nums[l, i-1]))) l >= j - 1 && l < i 
 */
var splitArray = function (nums, m) {
  let dp = new Array(nums.length + 1).fill(0).map(() => new Array(m + 1).fill(Number.MAX_SAFE_INTEGER));
  dp[1][1] = nums[0];

  for (let i = 2; i <= nums.length; i++) {
    dp[i][1] = dp[i - 1][1] + nums[i - 1];
  }

  for (let j = 2; j <= m; j++) {
    for (let i = j; i <= nums.length; i++) {
      for (let l = j - 1; l < i; l++) {
        let sum = 0;
        for (let k = l; k < i; k++) sum += nums[k];

        dp[i][j] = Math.min(dp[i][j], Math.max(dp[l][j - 1], sum));
      }
    }
  }

  return dp[nums.length][m];
};
