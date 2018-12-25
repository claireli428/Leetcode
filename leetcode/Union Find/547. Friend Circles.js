/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {

    let cluster = new UnionFind(M.length);
    for(let i = 0; i < M.length; i++){
        for(let j = i + 1; j < M[0].length; j++){
            if(M[i][j] === 1){
                cluster.union(i, j)
            }
        }
    }

    let root = new Set();
    for(let i = 0; i < M.length; i++){
        let currRoot = cluster.find(i);
        root.add(currRoot);
    }
    return root.size;
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