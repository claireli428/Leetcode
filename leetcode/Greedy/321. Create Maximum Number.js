/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    if(k === 0) return [];

    let res = [];
    for (let i = 0; i <= k; i++) {
        let arr1 = getMaxKthNumbers(nums1, i);
        let arr2 = getMaxKthNumbers(nums2, k - i);
        let arr = mergeMaxNumber(arr1, arr2);

        if(arr.length > res.length) {
            res = arr;
            continue;
        }

        if(arr.length === res.length) {
            for(let j = 0; j < arr.length; j++) {
                if(arr[j] <  res[j]) break;
                if(arr[j] > res[j]) {
                    res = arr;
                    break;
                }
            }
        }
    }

    return res;
};

var getMaxKthNumbers = function (arr, k) {
    let drop = arr.length - k;
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && drop && stack[stack.length - 1] < arr[i]) {
            stack.pop();
            drop--;
        }
        stack.push(arr[i]);
    }

    while (drop > 0) {
        stack.pop();
        drop--;
    }

    return stack;
};

var mergeMaxNumber = function (arr1, arr2) {
  let res = [];
  while (arr1.length && arr2.length) {
      let value = 0;
      if(arr1[0] > arr2[0]) {
          value = arr1.shift();
      } else if (arr1[0] < arr2[0]) {
          value = arr2.shift();
      } else {
          let i = 0;
          while (i < arr1.length && i < arr2.length && arr1[i] === arr2[i]) i++;

          if(i >= arr1.length || arr2[i] > arr1[i]) {
              value = arr2.shift();
          } else if(i >= arr2.length || arr1[i] > arr2[i]) {
              value = arr1.shift();
          }
      }
      res.push(value);
  }

  if(arr1.length) res = [...res, ...arr1];
  if(arr2.length) res = [...res, ...arr2];

  return res;
};