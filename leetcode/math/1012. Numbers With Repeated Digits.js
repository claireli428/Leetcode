/**
 * 1012. Numbers With Repeated Digits
 * @param {number} N
 * @return {number}
 */
var numDupDigitsAtMostN = function (N) {
  if (N <= 10) return 0;

  let nums = (N + 1).toString().split('').map(e => parseInt(e));
  return N - findUniques(nums);
};

var findUniques = function (nums) {
  let res = 0;

  //count unique numbers with digits from 1 ~ digits(N) - 1 
  let digits = nums.length - 1;
  for (let i = 1; i <= digits; i++) {
    let count = 9;
    for (let j = 2; j <= i; j++) {
      count *= 10 - j + 1;
    }
    res += count;
  }

  //count unique numbers with digits(N) and less than N
  let visited = new Set();
  for (let i = 0; i < nums.length; i++) {
    let count = i === 0 ? nums[i] - 1 : nums[i];

    //prevent duplicate prefix
    for (let n = 0; n < nums[i]; n++) {
      if (visited.has(n)) count--;
    }

    for (let j = i + 1; j < nums.length; j++) {
      count *= 10 - j;
    }
    res += count;

    //if there's repeat prefix, there's no need to count anymore
    if(visited.has(nums[i])) break;
    visited.add(nums[i]);
  }

  return res;

};

