class UnionFind {
    constructor(n){
        this._parents = [];
        this._rank = new Array(n + 1).fill(0);
        for(let i = 0; i <= n; i++){
            this._parents[i] = i;
        }
    }

    find(x){
        if(x !== this._parents[x]){
            this._parents[x] = this.find(this._parents[x]);
        }
        return this._parents[x];
    }

    union(x, y){
        let xRoot = this.find(x);
        let yRoot = this.find(y);

        if(this._rank[xRoot] > this._rank[yRoot]) this._parents[yRoot] = xRoot;
        if(this._rank[xRoot] < this._rank[yRoot]) this._parents[xRoot] = yRoot;
        if(this._rank[xRoot] === this._rank[yRoot]) {
            this._parents[xRoot] = yRoot;
            this._rank[yRoot]++;
        }

    }
}