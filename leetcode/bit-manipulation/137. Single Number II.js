/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    
    for(let i = 0; i < 32; i++) {
        let count = 0;
        for(let j = 0; j < nums.length; j++) {
            count += (nums[j] >> i) & 1;
        }
        res = res | ((count % 3) << i);
    }
    
    return res;
};
