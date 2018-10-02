//10/02/2018

var quickSort = function(nums) {
    if(nums.length < 2)
        return nums;
    
    var pivot = nums[nums.length-1], left = [], right = [];
    for(var i = 0; i < nums.length -1; i++) {
        if(nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}
