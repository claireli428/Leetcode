/**
 * Given n items with size nums[i]
 * which an integer array and all positive numbers.
 * An integer target denotes the size of a backpack.
 * Find the number of possible fill the backpack.
 * Each item may only be used once
 * 
 * Example
 * Given candidate items [1,2,3,3,7] and target 7,
 * A solution set is:
 * [7]
 * [1, 3, 3]
 * return 2
 * 
 * dp[i][w]: number of possible fill to size w with first i items
 * dp[i][w] = dp[i - 1][w] + dp[i - 1][w - nums[i-1]]
 */

var backPackV = function (nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = target; j >= 0; j--) {
      if (nums[i - 1] <= j)
        dp[j] += dp[j - nums[i - 1]];
    }
  }

  return dp[target];
};
