/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Find the largest index k such that nums[k] < nums[k + 1]. 
 * 
 * If k doesn't exist, the sequence is simply descending, reverse.
 * 
 * If k exists, the sequence after k index (not including k) are simply descending.
 * Find the largest index l greater than k such that nums[k] < nums[l], 
 * which is the smallest number that larger than nums[k]
 * Swap nums[k] and nums[l]. 
 * The sequence after k index (not including k) is still simply descending, reverse it.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) return nums;

  //find k
  let k = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) k = i;
  }

  if (k === -1) {
    nums = nums.reverse();
    return;
  }

  //find l
  let l = k + 1;
  for (let i = k + 2; i < nums.length; i++) {
    if (nums[i] > nums[k]) l = i;
  }

  //swap nums[k] and nums[l]
  let temp = nums[k];
  nums[k] = nums[l];
  nums[l] = temp;

  //reverse sequence after k
  k++;
  l = nums.length - 1;
  while (k < l) {
    let temp = nums[k];
    nums[k] = nums[l];
    nums[l] = temp;
    k++;
    l--;
  }

};
