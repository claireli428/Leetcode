/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  if (!nums.length) return [];

  let res = new Array(nums.length).fill(-1);
  let stack = [];
  let nextGreaterMap = new Map();
  let n = nums.length;
  for (let i = 0; i < n * 2; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      let top = stack.pop();
      if(!nextGreaterMap.has(top)) {
        nextGreaterMap.set(top, i % n);
      }
    }
    stack.push(i % n);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nextGreaterMap.has(i)) res[i] = nums[nextGreaterMap.get(i)];
  }

  return res;
};

var nextGreaterElements = function (nums) {
  if (!nums.length) return [];

  let res = new Array(nums.length).fill(-1);
  let stack = [];
  let n = nums.length;
  for (let i = 0; i < n * 2; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      let top = stack.pop();
      if(res[top] === -1) res[top] = nums[i % n];
    }
    stack.push(i % n);
  }

  return res;
};
