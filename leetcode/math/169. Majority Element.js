/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0], count = 1;
    
    for(let i = 1; i < nums.length; i++) {
        if(count === 0) candidate = nums[i];
        
        count += candidate === nums[i] ? 1 : -1;
    }
    
    return candidate;
};
