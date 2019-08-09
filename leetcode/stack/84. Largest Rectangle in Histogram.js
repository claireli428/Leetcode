/**
 * @param {number[]} heights
 * @return {number}
 * 
 * For each height, the max area is:
 * (height) * (distance between first previous less and first next less)
 * 
 * Brute Force
 * Two loops:
 * Outer loop (each height)
 * Inner loop (from itself, search previous and next directions to find first less)
 * Calc each max area in outer loop and take maximum
 * Time Complexity: O(n*n)
 * Space Complexity: O(1)
 * 
 * Optimization: there're repeating steps for find previous and next less for every height
 * Key point: Use monotonous stack to find previous/next less of all heights, time commplexity O(n)
 * Solution: 
 * 1. One direction at a time, find preLess/nextLess for each height
 * 2. Calc max area for each height and take maximum
 * Time Complexity: O(n) + O(n) + O(n) = O(n)
 * Space Complexity: O(n)
 */

var largestRectangleArea = function (heights) {
  let stack = [];
  let nextLess = new Array(heights.length).fill(heights.length);
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      let idx = stack.pop();
      nextLess[idx] = i;
    }

    stack.push(i);
  }

  stack = [];
  let preLess = new Array(heights.length).fill(-1);
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      let idx = stack.pop();
      preLess[idx] = i;
    }

    stack.push(i);
  }

  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    res = Math.max(res, heights[i] * (nextLess[i] - preLess[i] - 1));
  }

  return res;

};

// class Solution {
//     public int largestRectangleArea(int[] heights) {
//         int res = 0;
//         Stack<Integer> stack = new Stack<Integer>();
        
        
//         int[] nextLess = new int[heights.length];
//         for(int i = 0; i < heights.length; i++) {
//             while(!stack.empty() && heights[stack.peek()] > heights[i]) {
//                 int idx = stack.pop();
//                 nextLess[idx] = i;
//             }
            
//             stack.push(i);
//             nextLess[i] = heights.length;
//         }
        
//         while(!stack.empty()) stack.pop();
        
//         int[] preLess = new int[heights.length];
//         for(int i = heights.length - 1; i >= 0; i--) {
//             while(!stack.empty() && heights[stack.peek()] > heights[i]) {
//                 int idx = stack.pop();
//                 preLess[idx] = i;
//             }
            
//             stack.push(i);
//             preLess[i] = -1; 
//         }
        
//         for(int i = 0; i < heights.length; i++) {
//             res = Math.max(res, heights[i] * (nextLess[i] - preLess[i] - 1));
//         }
        
//         return res;
//     }
// }
