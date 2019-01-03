/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(!heights.length) return 0;

    let preLess = new Map(), nextLess = new Map();
    let stack = [];
    for(let i = 0; i < heights.length; i++) {
      while(stack.length && heights[i] < heights[stack[stack.length - 1]]) {
        let top = stack.pop();
        nextLess.set(top, i);
      }
      stack.push(i);
    }

    stack = [];
    for(let i = heights.length - 1; i >= 0; i--) {
      while(stack.length && heights[i] < heights[stack[stack.length - 1]]) {
        let top = stack.pop();
        preLess.set(top, i);
      }
      stack.push(i);
    }

    let res = 0;
    for(let i = 0; i < heights.length; i++) {
      let left = preLess.has(i) ? preLess.get(i) : -1;
      let right = nextLess.has(i) ? nextLess.get(i) : heights.length;
      res = Math.max(res, (right - left - 1) * heights[i]);
    }

    return res;
};
