/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
var intervalIntersection = function (A, B) {
  let aIdx = 0, bIdx = 0;
  let res = [];
  while (aIdx < A.length && bIdx < B.length) {

    let start = Math.max(A[aIdx].start, B[bIdx].start);
    let end = Math.min(A[aIdx].end, B[bIdx].end);
    if (start <= end) res.push(new Interval(start, end));
    
    if (A[aIdx].end < B[bIdx].end) {
      aIdx++;
    } else {
      bIdx++;
    }
  }

  return res;
};
