/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zeroIdx = 0;
  while (zeroIdx < nums.length && nums[zeroIdx] === 0) zeroIdx++;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && i > zeroIdx) {
      [nums[i], nums[zeroIdx]] = [nums[zeroIdx], nums[i]];
      while (nums[zeroIdx] === 0) zeroIdx++;
    }
  }

  let secIdx = nums.length - 1;
  while (nums[secIdx] === 2) secIdx--;
  for (let i = zeroIdx; i < secIdx; i++) {
    if (nums[i] === 2 && i < secIdx) {
      [nums[i], nums[secIdx]] = [nums[secIdx], nums[i]];
      while (secIdx > 0 && nums[secIdx] === 2) secIdx--;
    }
  }
};

var sortColors = function (nums) {
  let zeroIdx = 0, secIdx = nums.length - 1;

  for(let i = 0; i <= secIdx;i++) {
    while (nums[i] === 2 && i < secIdx) {
      [nums[i], nums[secIdx]] = [nums[secIdx], nums[i]];
      secIdx--;
    }
    while(nums[i] === 0 && i > zeroIdx) {
      [nums[i], nums[zeroIdx]] = [nums[zeroIdx], nums[i]];
      zeroIdx++;
    }
  }
};

var sortColors = function (nums) {
  let zeroIdx = 0, secIdx = nums.length - 1;

  for (let i = 0; i <= secIdx; i++) {
    if (nums[i] === 2) {
      while (secIdx > 0 && nums[secIdx] === 2) secIdx--;
      if(secIdx > i) [nums[i], nums[secIdx]] = [nums[secIdx], nums[i]];
    }
    if (nums[i] === 0) {
      while (zeroIdx < nums.length && nums[zeroIdx] === 0) zeroIdx++;
      if(zeroIdx > i) {
        i = zeroIdx - 1;
      }
      else {
        [nums[i], nums[zeroIdx]] = [nums[zeroIdx], nums[i]];
      }
    }
  }
};
