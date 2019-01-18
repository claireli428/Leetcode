/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let singles = nums[0];
    for(let i = 1; i < nums.length; i++) singles ^= nums[i];
    
    let diffOne = 1;
    for(let i = 0; i < 32; i++) {
        if((diffOne & singles) > 0) break;
        diffOne <<= 1;
    }
    
    let first = 0, second = 0;
    for(let i = 0 ; i < nums.length; i++) {
        if((nums[i] & diffOne) === 0) {
            first ^= nums[i];
        } else {
            second ^= nums[i];
        }
    }
    
    return [first, second];
};
