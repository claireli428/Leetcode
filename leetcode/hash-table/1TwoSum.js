
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    while(nums.length) {
        var second = nums.pop();
        for(var i = 0; i < nums.length; i++) {
            if(nums[i] + second === target) {
                return [i, nums.length];
            }
        }
    }

};

var twoSum = function(nums, target) {

    var lookup = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(lookup.has(target - nums[i])) {
            return [lookup.get(target - nums[i]), i];
        }

        lookup.set(nums[i], i);
    }

};
