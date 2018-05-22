/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    var start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        var middle = Math.floor((start+end)/2);
        if (nums[middle] > nums[end])
            start = middle;
        else
            end = middle;
    } 

    return Math.min(nums[start], nums[end]);
};
