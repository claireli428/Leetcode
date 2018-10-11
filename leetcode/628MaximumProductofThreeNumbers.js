var maximumProduct = function (nums) {
    let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER;
    let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER, min3 = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (nums[i] > max3) {
            max3 = nums[i];
        }

        if (nums[i] < min3) {
            min1 = min2;
            min2 = min3;
            min3 = nums[i];
        } else if (nums[i] < min2) {
            min1 = min2;
            min2 = nums[i];
        } else if (nums[i] < min1) {
            min1 = nums[i];
        }
    }

    return Math.max(max1 * max2 * max3, max1 * min2 * min3);

};
