/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    if (!grid.length || !grid[0].length) return 0;

    let count = 0, neighbor = 0, rows = grid.length, cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j]) {
                count++;
                if (i < rows - 1 && grid[i + 1][j]) neighbor++;
                if (j < cols - 1 && grid[i][j + 1]) neighbor++;
            }
        }
    }

    return count * 4 - neighbor * 2;
};
