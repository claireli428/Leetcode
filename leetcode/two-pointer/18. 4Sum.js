/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => { return a - b; });

  let res = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let sum = target - nums[i] - nums[j];
      let temp = twoSum(nums.slice(j + 1), sum);
      if (temp.length > 0) {
        temp.forEach(t => {
          res.push([nums[i], nums[j], ...t]);
        });
      }
    }
  }

  return res;
};

var twoSum = function (arr, sum) {
  let res = [];

  let l = 0, r = arr.length - 1;
  while (l < r) {
    if (arr[l] + arr[r] === sum) {
      res.push([arr[l], arr[r]]);
      l++;
      r--;
    } else if (arr[l] + arr[r] < sum) {
      l++;
    } else {
      r--;
    }
    while (l < arr.length && arr[l] === arr[l - 1]) l++;
    while (r > 0 && arr[r] === arr[r + 1]) r--;
  }

  return res;
};
