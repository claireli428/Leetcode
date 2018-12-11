/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;

  let l = 1, r = 1;
  while (r < nums.length) {
    while (nums[r] === nums[r - 1]) r++;
    if (r >= nums.length) break;

    if (r !== l) {
      nums[l] = nums[r];
    }
    r++;
    l++;
  }
  return l;
};
