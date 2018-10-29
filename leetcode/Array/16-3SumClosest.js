/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => { return a - b; });

    let res = nums[0] + nums[1] + nums[nums.length-1];
    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let start = i+1, end = nums.length - 1;
        while (start < end) {
            const sum = nums[start] + nums[end] + nums[i];
            if (sum === target) {
                return target;
            }

            if (sum < target) {
                while(start < end && nums[start+1] === nums[start]) start++;
                start++;
            } else {
                while(start < end && nums[end-1] === nums[end]) end--;
                end--;
            }

            if(Math.abs(sum - target) < Math.abs(res - target)) res = sum;
        }
    }

    return res;
};

