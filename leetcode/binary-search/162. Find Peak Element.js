/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid + 1] > nums[mid]) {
      //nums[mid + 1] > nums[mid], mid won't be peak, so l = mid + 1
      l = mid + 1;
    } else {
      //nums[mid] > nums[mid + 1], mid could be peak, so r = mid
      r = mid;
    }
  }
  //when l and r can't use mid + 1 and mid - 1
  //while condition uses l + 1 < r
  //otherwise will cause infinite loop

  return l;
};
