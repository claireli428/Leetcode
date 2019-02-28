/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let graph = new Map();
  let notEquals = [];
  for (let i = 0; i < equations.length; i++) {
    let first = equations[i][0], second = equations[i][3];
    let firstNeighbors = graph.has(first) ? graph.get(first) : new Set();
    let secondNeighbors = graph.has(second) ? graph.get(second) : new Set();
    if (equations[i][1] === '=') {
      firstNeighbors.add(second);
      secondNeighbors.add(first);
    } else {
      notEquals.push({ first: first, second: second });
    }
    graph.set(first, firstNeighbors);
    graph.set(second, secondNeighbors);
  }

  for(let i = 0; i < notEquals.length; i++) {
    if(dfs(graph, notEquals[i].first, notEquals[i].second, new Set())) return false;
  }

  return true;

};

var dfs = function(graph, start, target, visited) {
  if(start === target) return true;

  visited.add(start);
  let neighbors = graph.get(start);
  for(let neighbor of neighbors) {
    if(!visited.has(neighbor) && dfs(graph, neighbor, target, visited)) return true;
  }

  return false;
};
