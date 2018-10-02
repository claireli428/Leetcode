var mergeSort = function(nums) {
    if(nums.length < 2)
        return nums;
    
    var mid = Math.floor(nums.length/2), res = [];
    var left = mergeSort(nums.slice(0, mid));
    var right = mergeSort(nums.slice(mid));
    while (left.length > 0 && right.length > 0) {
        res.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return [...res, ...left, ...right];

}
