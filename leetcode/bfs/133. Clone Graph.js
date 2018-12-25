/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if(!graph) return graph;
    let oldVertices = getVerticesByBFS(graph);

    let map = new Map();
    for(let oldVertice of oldVertices) {
        map.set(oldVertice, new UndirectedGraphNode(oldVertice.label));
    }

    for(let oldVertice of oldVertices) {
        let oldNeighbors = oldVertice.neighbors;
        for(let i = 0; i < oldNeighbors.length; i++) {
            let newVertice = map.get(oldVertice);
            newVertice.neighbors.push(map.get(oldNeighbors[i]));

        }
    }

    return map.get(graph);

};

var getVerticesByBFS = function (graph) {
    let queue = [graph], visited = new Set([graph]);
    while (queue.length) {
        let len = queue.length;
        for(let i= 0; i < len; i++) {
            let head = queue.shift();
            let neighbors = head.neighbors;
            for(let j = 0; j < neighbors.length; j++) {
                if(!visited.has(neighbors[j])) {
                    queue.push(neighbors[j]);
                    visited.add(neighbors[j]);
                }
            }
        }
    }

    return visited;
};