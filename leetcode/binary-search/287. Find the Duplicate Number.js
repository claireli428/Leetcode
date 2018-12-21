/**
 * @param {number[]} nums
 * @return {number}
 */

//Binary Search
var findDuplicate = function (nums) {
  let low = 1, high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++;
    }
    if (count > mid) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high;
};

//Linked List Cycle Start
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  let ptr1 = nums[0], ptr2 = slow;
  while (ptr1 !== ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
};
