/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums.length) return;

  let pre = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[pre] = nums[i];
      pre++;
    }
  }

  for(let i = pre; i < nums.length; i++) {
    nums[i] = 0;
  }

};
