/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
  return subarraysNoMoreThanK(A, K) - subarraysNoMoreThanK(A, K - 1);
};

var subarraysNoMoreThanK = function (A, k) {

  let cntDict = new Map();
  let l = 0, res = 0;

  for (let r = 0; r < A.length; r++) {
    let cnt = cntDict.has(A[r]) ? cntDict.get(A[r]) : 0;
    cntDict.set(A[r], cnt + 1);
    if(cnt === 0) k--;

    while(k < 0) {
      let newCnt = cntDict.get(A[l]) - 1;
      cntDict.set(A[l], newCnt);
      l++;
      if(newCnt === 0) k++;
    }

    res += r - l + 1;
  }

  return res;
};
