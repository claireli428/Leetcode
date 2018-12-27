/**
 * @param {number[]} nums
 * @return {number}
 */
//Greedy
var jump = function (nums) {
  if (nums.length < 2) return 0;

  let curJump = 1;
  let curEnd = nums[0];
  let farthest = nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curEnd) {
      curJump++;
      curEnd = farthest;
    }
  }

  return curJump;
};

//DP 
var jump = function (nums) {
  if (nums.length < 2) return 0;

  let n = nums.length;
  let dp = new Array(n).fill(n);

  // dp[0] = 0;
  // for (let i = 0; i < n - 1; i++) {
  //   for (let j = i + 1; j <= n - 1 && j <= i + nums[i]; j++) {
  //     dp[j] = Math.min(dp[j], dp[i] + 1);
  //   }
  // }

  //optimization
  dp[0] = 0;
  let lastFarthest = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = lastFarthest + 1; j <= n - 1 && j <= i + nums[i]; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
    lastFarthest = Math.max(lastFarthest, i + nums[i]);
  }

  return dp[n - 1];
};
