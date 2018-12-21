/**
 * @param {number[]} height
 * @return {number}
 */
// Two Pointer
// Right max is always larger than left, any bar from left side lower than left max can be added to result
// The same for bar from right side 
var trap = function (height) {
  let l = 0, r = height.length - 1;

  let res = 0, leftMax = 0, rightMax = 0;
  while(l < r) {
    if(height[l] <= height[r]) {
      leftMax = Math.max(height[l], leftMax);
      res += leftMax - height[l];
      l++;
    } else {
      rightMax = Math.max(height[r], rightMax);
      res += rightMax - height[r];
      r--;
    }
  }

  return res;
};

//Stack
var trap = function (height) {
  let res = 0;
  let stack = [];
  for(let i = 0; i < height.length; i++) {
    while(stack.length && height[i] > height[stack[stack.length - 1]]) {
      let idx = stack[stack.length - 1];
      stack.pop();

      if(!stack.length) break;

      let top = stack[stack.length - 1];
      if(height[top] !== height[idx]) {
        let h = Math.min(height[i], height[top]) - height[idx];
        let w = i - top - 1;
        res += h * w;
      }
    }
    stack.push(i);
  }

  return res;
};
