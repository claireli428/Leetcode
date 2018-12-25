/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let cluster = new UnionFind(edges.length);
    for (let i = 0; i < edges.length; i++) {
        let rootF = cluster.find(edges[i][0]);
        let rootS = cluster.find(edges[i][1]);
        if(rootF === rootS) {
            return edges[i];
        } else {
            cluster.union(edges[i][0], edges[i][1]);
        }
    }
    return [];
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