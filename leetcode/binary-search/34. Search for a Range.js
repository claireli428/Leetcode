/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var searchRange = function(nums, target) {
    if(nums.length === 0)
        return [-1, -1];
    
    var first = last = -1, start = 0, end = nums.length - 1;
    while(start + 1 < end) {
        var middle = Math.floor((start+end)/2);
        if (nums[middle] === target) 
            first = middle;

        if (nums[middle] < target) 
            start = middle;
        else 
            end = middle;
    }

    if(nums[end] === target)
        first = end;
    if(nums[start] === target) 
        first = start;
    
    start = 0, end = nums.length - 1;
    while(start + 1 < end) {
        var middle = Math.floor((start+end)/2);
        if (nums[middle] === target)
            last = middle;  

        if (nums[middle] > target)
            end = middle;
        else
            start = middle;
        
    }

    if(nums[start] === target)
        last = start;
    if(nums[end] === target) 
        last = end;

    return [first, last];

};
