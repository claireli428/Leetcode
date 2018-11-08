/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(!nums.length) return 0;

    let left = 0, right = 0, sum = 0, res = nums.length + 1;
    while(right < nums.length) {
        sum += nums[right];
        
        while(sum >= s) {
            res = Math.min(res, right - left + 1);
            sum -= nums[left];
            left++;
        }
        
        right++;
    }

    return res > nums.length ? 0 : res;
};
