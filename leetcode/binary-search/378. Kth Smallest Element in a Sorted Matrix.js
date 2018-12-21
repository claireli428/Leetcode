/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const rows = matrix.length, cols = matrix[0].length;
  let l = matrix[0][0], h = matrix[rows - 1][cols - 1] + 1;

  while (l < h) {
    let mid = Math.floor((l + h) / 2);
    let count = 0;
    for (let i = 0; i < rows; i++) {
      let j = cols;
      while(matrix[i][j - 1] > mid && j > 0) j--;
      count += j;
    }

    if(count < k) {
      l = mid + 1;
    } else {
      h = mid;
    }
  }

  return l;
};
