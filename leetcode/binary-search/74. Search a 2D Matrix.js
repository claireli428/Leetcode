/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0)
        return false;

    var start = 0, rows = matrix.length, cols = matrix[0].length, end = rows*cols-1;
    while (start <= end) {
        var middle = Math.floor((start+end)/2),
            num = matrix[Math.floor(middle/cols)][middle%cols];
        if(num === target)
            return true;

        if (num < target)
            start = middle + 1;
        else
            end = middle - 1;
    }

    return false;
};
