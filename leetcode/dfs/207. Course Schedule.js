/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function (numCourses, prerequisites) {
  let { graph, starts } = constructGraph(numCourses, prerequisites);
  if (!starts.size) return false;

  let visited = new Set(), memo = new Set();
  for (let start of starts.values()) {
    if (!exploreCycle(memo, visited, graph, start)) return false;
  }

  return visited.size === numCourses;
};

var exploreCycle = function (memo, visited, graph, start) {
  if (memo.has(start)) return true;

  if (visited.has(start)) return false;

  visited.add(start);
  let outdegrees = graph.get(start);
  if (outdegrees) {
    for (let outdegree of outdegrees.values()) {
      if (!exploreCycle(memo, visited, graph, outdegree)) return false;
    }
  }

  memo.add(start);
  return true;
};

var constructGraph = function (numCourses, prerequisites) {
  let graph = new Map(), starts = new Set();
  for (let i = 0; i < numCourses; i++) {
    starts.add(i);
  }

  for (let i = 0; i < prerequisites.length; i++) {
    if (starts.has(prerequisites[i][1])) starts.delete(prerequisites[i][1]);

    const key = prerequisites[i][0];
    let values = graph.has(key) ? graph.get(key) : new Set();
    values.add(prerequisites[i][1]);
    graph.set(key, values);
  }

  return { graph: graph, starts: starts };
};
