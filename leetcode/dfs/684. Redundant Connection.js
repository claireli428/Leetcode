/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let graph =  createGraph(edges);
    for(let i = edges.length - 1; i >= 0; i--){
        let visited = new Set(edges[i]);
        if(dfsFindCycle(edges[i][0], edges[i][0], edges[i][1], graph, visited)){
            return edges[i]
        }
    }
};

var dfsFindCycle = function (currNode, nodeStart, nodeEnd, graph, visited) {

    let neighbors = graph.get(currNode);
    for(let neighbor of neighbors){
        if(currNode !== nodeStart && neighbor === nodeEnd) return true;
        if(!visited.has(neighbor)){
            visited.add(neighbor);
            if(dfsFindCycle(neighbor, nodeStart, nodeEnd, graph, visited)){
                return true;
            }
        }
    }

    return false;
};


var createGraph = function (edges) {
    let graph = new Map();
    for(let i = 0; i < edges.length; i++){
        let firstNode = edges[i][0];
        let secondNode = edges[i][1];
        if(graph.has(firstNode)){
            graph.get(firstNode).add(secondNode)
        }else {
            graph.set(firstNode, new Set([secondNode]))
        }

        if(graph.has(secondNode)){
            graph.get(secondNode).add(firstNode)
        }else {
            graph.set(secondNode, new Set([firstNode]))
        }
    }
    return graph;
};