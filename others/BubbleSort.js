var bubbleSort = function(nums) {
    var sortedCount = 0;
    for(;sortedCount < nums.length; sortedCount++) {
        for(var i = 0; i < nums.length - sortedCount - 1; i++) {
            if(nums[i] > nums[i+1]) {
                var temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
    }

    return nums;
}
