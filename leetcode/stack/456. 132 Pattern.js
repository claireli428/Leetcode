/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let secondPatterMax = Number.MIN_SAFE_INTEGER;
    let stack = [];
    for(let i = nums.length - 1; i>=0; i--){
        if(nums[i] < stack[stack.length - 1] && nums[i] < secondPatterMax){
            return true;
        }
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]){
            secondPatterMax = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};