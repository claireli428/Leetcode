/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = [];

    let deque = [];
    for (let i = 0; i < nums.length; i++) {
        while (deque.length && deque[0] <= i - k) deque.shift();

        while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) deque.pop();

        deque.push(i);
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }

    }

    return res;
};
