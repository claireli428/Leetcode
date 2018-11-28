/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 
//DFS
var findOrder = function(numCourses, prerequisites) {
  const { graph, starts } = constructGraph(numCourses, prerequisites);
  if(!starts.size) return [];

  let res = [], visited = new Set();
  for(let start of starts.values()) {
    if(!canFinishHelper(res, visited, graph, start)) return [];
  }

  return res.length === numCourses ? res : [];
};

var canFinishHelper = function (res, visited, graph, start) {
  if(visited.has(start) && !res.includes(start)) return false;

  visited.add(start);
  let indegrees = graph.get(start);
  if(indegrees) {
    for(let indegree of indegrees.values()) {
      if(!res.includes(indegree)) {
        if(!canFinishHelper(res, visited, graph, indegree)) return false;
      }
    }
  }

  res.push(start);
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
