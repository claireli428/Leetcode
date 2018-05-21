/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0)
        return false;
    
    var r = 0, c = matrix[0].length - 1;

    while (r < matrix.length && c >= 0) {
        if(matrix[r][c] === target)
            return true;
        
        if(matrix[r][c] < target)
            r++;
        else
            c--;
    }

    return false;
    
};
