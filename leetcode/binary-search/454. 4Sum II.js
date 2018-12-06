/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let sum = A[i] + B[j];
      let count = map.has(sum) ? map.get(sum) : 0;
      map.set(sum, ++count);
    }
  }

  let res = 0;
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let sum = -1 * (C[i] + D[j]);
      if (map.has(sum)) {
        res += map.get(sum);
      }
    }
  }

  return res;
};
