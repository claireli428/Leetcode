/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if(nums.length === 0)
        return false;

    var start = 0, end = nums.length - 1;
    while (start <= end) {
        var middle = Math.floor((start+end)/2);
        if(nums[middle] === target)
            return true;

        if(nums[middle] === nums[end]) {
            start++;
            end--;
        }
        else if(nums[middle] > nums[end]) {
            if(nums[start] <= target && nums[middle] > target)
                end = middle - 1;
            else
                start = middle + 1;

        }
        else {
            if(nums[middle] < target && nums[end] >= target)
                start = middle + 1;
            else
                end = middle - 1;
        }
    }

    return false;
};
