/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let origColor = image[sr][sc];
    if(origColor === newColor) return image;
    
    dfs(image, sr, sc, origColor, newColor);
    return image;
};

var dfs = function(image, row, col, origColor, newColor) {
    if(row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== origColor) return;
    
    image[row][col] = newColor;
    dfs(image, row + 1, col, origColor, newColor);
    dfs(image, row - 1, col, origColor, newColor);
    dfs(image, row, col + 1, origColor, newColor);
    dfs(image, row, col - 1, origColor, newColor);
};
