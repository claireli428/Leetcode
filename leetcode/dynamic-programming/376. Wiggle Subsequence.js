/**
 * @param {number[]} nums
 * @return {number}
 */

//DP
//dpDown[i] (dpUp[i]): max sequence length which last wiggle is down(up) before ith positon
//if nums[i] > nums[i-1] dpUp[i] = dpDown[i-1] + 1, dpDown[i] = doDown[i-1];
//if nums[i] < nums[i-1] dpDown[i] = dpUp[i-1] + 1, dpUp[i] = dpUp[i-1];
//if nums[i] == nums[i-1] dpDown[i] = doDown[i-1], dpUp[i] = dpUp[i-1];
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length;

  let dpDown = new Array(nums.length), dpUp = new Array(nums.length);
  dpDown[0] = 1, dpUp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dpUp[i] = dpDown[i - 1] + 1;
      dpDown[i] = dpDown[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      dpDown[i] = dpUp[i - 1] + 1;
      dpUp[i] = dpUp[i - 1];
    } else {
      dpDown[i] = dpDown[i - 1];
      dpUp[i] = dpUp[i - 1];
    }
  }

  return Math.max(dpDown[nums.length - 1], dpUp[nums.length - 1]);
};

//if current wiggle is down and pre wiggle is not, count++, vice versa
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length;

  let preDiff = nums[1] - nums[0];
  let count = preDiff === 0 ? 1: 2;
  for(let i = 2; i < nums.length; i++) {
    let diff = nums[i] - nums[i-1];
    if((diff < 0 && preDiff >= 0) || (diff > 0 && preDiff <= 0)) {
      count++;
      preDiff = diff;
    }
  }

  return count;
};
