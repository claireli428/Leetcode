/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let res = [0];
  helper(nums, S, 0, 0, res);
  return res[0];
};

var helper = function (nums, target, start, sum, res) {
  if (start >= nums.length) {
    if (sum === target) res[0]++;
    return;
  }

  let sum1 = sum + nums[start];
  let sum2 = sum - nums[start];
  helper(nums, target, start + 1, sum1, res);
  helper(nums, target, start + 1, sum2, res);
};

/**
 * DP
 * sum(P) - sum(N) = target (P for subset that apply + symbol, N for subset that apply - symbol)
 * sum(P) + sum(N) + sum(P) - sum(N) = target + sum(P) + sum(N)
 * 2 * sum(P) = target + sum(nums)
 * sum(P) = (target + sum(nums)) / 2
 * voila! Backpack prolbem!!!
 */
var findTargetSumWays = function (nums, S) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  if (sum < S || (S + sum) % 2 !== 0) return 0;

  let weight = (S + sum) / 2;
  let dp = new Array(weight + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = weight; j >= nums[i - 1]; j--) {
      dp[j] += dp[j - nums[i - 1]];
    }
  }

  return dp[weight];
};
