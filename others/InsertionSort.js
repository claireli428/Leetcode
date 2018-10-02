var insertionSort = function(nums) {
    if(nums.length < 2) 
        return nums;

    var res = [nums[0]];
    for(i = 1; i < nums.length; i++) {
        var len = res.length;
        for(j = 0; j < res.length; j++) {
            if(nums[i] < res[j]) {
                res.splice(j, 0, nums[i]);
                break;
            }
        }
        if(len === res.length) {
            res.push(nums[i]);
        }
    }

    return res;
}
