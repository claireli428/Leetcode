/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid.length) return 0;

    let rows = grid.length, cols = grid[0].length;

    let clusters = new UnionFind(rows*cols);
    for(let i = 0; i< rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(grid[i][j] === '1') {
                let curIdx = i * cols + j;
                let top = curIdx - cols, down = curIdx + cols, left = curIdx - 1, right = curIdx +1;
                if(i > 0 && grid[i-1][j] === '1') clusters.union(curIdx, top);
                if(i < rows - 1 && grid[i+1][j] === '1') clusters.union(curIdx, down);
                if(j > 0 && grid[i][j-1] === '1') clusters.union(curIdx, left);
                if(j < cols - 1 && grid[i][j+1] === '1') clusters.union(curIdx, right);
            }
        }
    }

    let roots = new Set();
    for(let i = 0; i< rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(grid[i][j] === '1') {
                let curIdx = i * cols + j;
                let root = clusters.find(curIdx);
                roots.add(root);
            }
        }
    }

    return roots.size;
};

function UnionFind(n) {
    this._parents = new Array(n+1).fill(0).map((e, i ) => i);
    this._rank = new Array(n+1);

    this.find = function (x) {
        if(x !== this._parents[x]) {
            this._parents[x] = this.find(this._parents[x]);
        }
        return this._parents[x];
    };

    this.union = function (x, y) {
        let rootX = this.find(x), rootY = this.find(y);
        if(this._rank[rootX] > this._rank[rootY]) {
            this._parents[rootY] = rootX;
        } else if(this._rank[rootX] < this._rank[rootY]) {
            this._parents[rootX] = rootY;
        } else {
            this._parents[rootX] = rootY;
            this._rank[rootY]++;
        }
    };
}