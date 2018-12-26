/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (!nums.length) return true;

  let n = nums.length;
  let maxReach = nums[0];

  for(let i = 1; i < n; i++) {
    if(i <= maxReach) {
      maxReach = Math.max(maxReach, i + nums[i])
    }
  }

  return maxReach >= n - 1;
};

//Greedy
//Update leftmost index that can reach last
var canJump = function (nums) {
  if (!nums.length) return true;

  let n = nums.length;
  let leftmost = n - 1;

  for(let i = n - 1; i >= 0; i--) {
    if(i + nums[i] >= leftmost) {
      leftmost = i;
    }
  }

  return leftmost === 0;
};
