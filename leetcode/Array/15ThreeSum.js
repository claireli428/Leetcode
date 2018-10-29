/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => { return a - b; });
    if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];

    let res = [];
    for (let i = nums.length - 1; i >= 2; i--) {
        if (nums[i] < 0) break;

        if (i < nums.length - 1 && nums[i] === nums[i + 1]) continue;

        let start = 0, end = i - 1, target = 0 - nums[i];
        while (start < end) {
            const sum = nums[start] + nums[end];
            if (sum === target) {
                res.push([nums[start], nums[end], nums[i]]);
                while (start < end && nums[start + 1] === nums[start]) start++;
                while (start < end && nums[end - 1] === nums[end]) end--;
                start++;
                end--;
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }

    return res;
};

