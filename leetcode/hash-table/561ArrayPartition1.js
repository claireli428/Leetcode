/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let res = 0;
    nums.sort((a, b) => {return a - b;});
    
    for(let i = 0; i <= nums.length - 2; i+=2) {
        res += nums[i];
    }
    
    return res;
};

var arrayPairSum = function(nums) {
    let res = 0;
    let bucket = new Array(20001).fill(0);
    for(let i = 0; i < nums.length; i++) {
        bucket[nums[i]+10000] += 1;
    }
    
    let odd = true;
    for(i = 0; i < bucket.length; i++) {
        while(bucket[i]) {
            res += odd ? i - 10000 : 0;
            odd = !odd;
            bucket[i]--;
        }
    }
    
    return res;
};

