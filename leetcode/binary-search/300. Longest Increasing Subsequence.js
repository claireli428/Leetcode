/**
 * @param {number[]} nums
 * @return {number}
 */

 //DP
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;

  let dp = new Array(nums.length).fill(1);

  let max = 1;
  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }

  return max;
};

//Binary Search
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;

  let res = [nums[0]];
  for(let i = 1; i < nums.length; i++) {
    let idx = binarySearch(res, nums[i]);

    if(idx === res.length - 1 && res[idx] < nums[i]) {
      res.push(nums[i]);
    } else {
      res[idx] = nums[i];
    }
  }

  return res.length;
};

var binarySearch = function(res, num) {
  let l = 0, r = res.length - 1;
  while(l < r) {
    let mid = Math.floor((l + r) / 2);
    if(res[mid] < num) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
};
