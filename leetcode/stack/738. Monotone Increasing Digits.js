/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  let str = N.toString();
  let stack = [];
  for(let i = 0; i < str.length; i++) {
    if(stack.length && str[i] < stack[stack.length - 1]) break;
    stack.push(str[i]);
  }

  if(stack.length === str.length) return N;

  while(stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) stack.pop();

  stack[stack.length - 1]--;
  for(let i = stack.length; i < str.length; i++) stack.push('9');

  return parseInt(stack.join(''));
};
