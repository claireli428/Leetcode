/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    if(nums.length === 0)
        return 0;

    var start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        var middle = Math.floor((start+end)/2);
        if(nums[middle] === target)
            return middle;
        if(nums[middle] < target)
            start = middle;
        else
            end = middle;
    }

    if(nums[start] >= target)
        return start;
    if(nums[end] < target)
        return end + 1;

    return end;

};
