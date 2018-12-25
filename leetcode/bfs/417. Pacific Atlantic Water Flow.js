/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(!matrix.length) return [];

    let rows = matrix.length, cols = matrix[0].length;
    let pacificM = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    let atlanticM = new Array(rows).fill(false).map(() => new Array(cols).fill(false));

    let pacificQ = [],atlanticQ = [];
    for(let r = 0; r < rows; r++) {
        pacificQ.push({row: r, col: 0});
        pacificM[r][0] = true;
        atlanticQ.push({row: r, col: cols - 1});
        atlanticM[r][cols - 1] = true;
    }

    for(let c = 0; c < cols; c++) {
        if(c !== 0) pacificQ.push({row: 0, col: c});
        pacificM[0][c] = true;
        if(c !== cols - 1) atlanticQ.push({row: rows - 1, col: c});
        atlanticM[rows - 1][c] = true;
    }

    bfs(pacificQ, pacificM, matrix, rows, cols);
    bfs(atlanticQ, atlanticM, matrix, rows, cols);

    let res = [];
    for(let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if(pacificM[r][c] && atlanticM[r][c]) res.push([r, c]);
        }
    }
    return res;
};

var bfs = function (queue, visited, matrix, rows, cols) {
    while (queue.length) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let head = queue.shift();
            let row = head.row, col = head.col, value = matrix[row][col];
            if(row > 0 && !visited[row -1][col] && matrix[row - 1][col] >= value) {
                queue.push({row: row - 1, col: col});
                visited[row-1][col] = true;
            }
            if(row < rows - 1 && !visited[row +1][col] && matrix[row +1][col] >= value) {
                queue.push({row: row + 1, col: col});
                visited[row+1][col] = true;
            }
            if(col > 0 && !visited[row][col-1] && matrix[row][col -1] >= value) {
                queue.push({row: row, col: col-1});
                visited[row][col-1] = true;
            }
            if(col < cols - 1 && !visited[row][col+1] && matrix[row][col+1] >= value) {
                queue.push({row: row, col: col+1});
                visited[row][col+1] = true;
            }
        }
    }
};