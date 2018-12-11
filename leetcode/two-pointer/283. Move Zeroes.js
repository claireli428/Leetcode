/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0;
  while (nums[l] !== 0 && l < nums.length) l++;

  if(l >= nums.length) return;

  let r = l + 1;
  while (r < nums.length) {
    if (nums[r] !== 0) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }

  while (l < nums.length) {
    nums[l] = 0;
    l++
  }
};
