/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = new Array(nums1.length).fill(-1);

    for(let i = 0; i < nums1.length; i++) {
        let idx = nums2.indexOf(nums1[i]);
        for(let j = idx + 1; j < nums2.length; j++) {
            if(nums2[j] > nums1[i]) {
                res[i] = nums2[j];
                break;
            }
        }
    }

    return res;
};

//monotonic stack
var nextGreaterElement = function(nums1, nums2) {
    let res = new Array(nums1.length).fill(-1);
    let nextGreaterMap = new Map();
    let stack = [];
    for(let i = 0; i < nums2.length; i++) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            nextGreaterMap.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }

    for(let i = 0; i < nums1.length; i++) {
        if(nextGreaterMap.has(nums1[i])) res[i] = nextGreaterMap.get(nums1[i]);
    }

    return res;
};