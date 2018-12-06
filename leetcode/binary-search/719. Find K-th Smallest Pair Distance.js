/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  let sorted = nums.sort((a, b) => {return a - b});

  let n = sorted.length;
  let l = 0, r = sorted[n - 1] - sorted[0];
  while(l < r) {
    let mid = Math.floor((l + r) / 2);
    let count = 0;
    for(let i = 1; i < n; i++) {
      let j = 0;
      while(j < i && sorted[i] - sorted[j] > mid) j++;
      count += i - j; 
    }
    if(count < k) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
};


//Priority Queue
const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  head() {
    return this._heap[top];
  }
  offer(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  poll() {
    const poppedValue = this.head();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.head();
    this._heap[top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

var smallestDistancePair = function (nums, k) {
  let sorted = nums.sort((a, b) => {return a - b});
  let pq = new PriorityQueue((a, b) => { return sorted[a.r] - sorted[a.c] < sorted[b.r] - sorted[b.c]});

  for(let i = 1; i < sorted.length; i++) {
    pq.offer({r: i, c: i - 1});
  }

  while(k > 1) {
    let pos = pq.poll();

    if(pos.c > 0) pq.offer({r: pos.r, c: pos.c - 1});

    k--;
  }

  let head = pq.head();
  return sorted[head.r] - sorted[head.c];
};
