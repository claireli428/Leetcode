/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

//BFS
var findOrder = function (numCourses, prerequisites) {
  const { graph, starts, indegreeDict } = constructBFSGraph(numCourses, prerequisites);
  if (!starts.size) return [];

  let res = [], queue = [];
  for(let start of starts.values()) queue.push(start);

  while(queue.length) {
    const start = queue.pop();
    res.push(start);
    const outdegrees = graph.get(start);
    if(outdegrees) {
      for(let vertex of outdegrees.values()) {
        indegreeDict[vertex] -= 1;
        if(indegreeDict[vertex] === 0) queue.push(vertex);
      }
    }
  }

  return res.length === numCourses ? res : [];
};

var constructBFSGraph = function (numCourses, prerequisites) {
  let graph = new Map(), starts = new Set(), indegreeDict = new Array(numCourses).fill(0);
  for (let i = 0; i < numCourses; i++) {
    starts.add(i);
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const idx = prerequisites[i][0]; 
    indegreeDict[idx] += 1;

    if (starts.has(prerequisites[i][0])) starts.delete(prerequisites[i][0]);

    const vertex = prerequisites[i][1];
    let outdegrees = graph.has(vertex) ? graph.get(vertex) : new Set();
    outdegrees.add(prerequisites[i][0]);
    graph.set(vertex, outdegrees);
  }

  return { graph: graph, starts: starts, indegreeDict: indegreeDict };
};

//DFS
var findOrder = function (numCourses, prerequisites) {
  const { graph, starts } = constructDFSGraph(numCourses, prerequisites);
  if (!starts.size) return [];

  let res = [], visited = new Set();
  for (let start of starts.values()) {
    if (!canFinishHelper(res, visited, graph, start)) return [];
  }

  return res.length === numCourses ? res : [];
};

var canFinishHelper = function (res, visited, graph, start) {
  if (visited.has(start) && !res.includes(start)) return false;

  visited.add(start);
  let outdegrees = graph.get(start);
  if (outdegrees) {
    for (let vertex of outdegrees.values()) {
      if (!res.includes(vertex)) {
        if (!canFinishHelper(res, visited, graph, vertex)) return false;
      }
    }
  }

  res.push(start);
  return true;
};

var constructDFSGraph = function (numCourses, prerequisites) {
  let graph = new Map(), starts = new Set();
  for (let i = 0; i < numCourses; i++) {
    starts.add(i);
  }

  for (let i = 0; i < prerequisites.length; i++) {
    if (starts.has(prerequisites[i][1])) starts.delete(prerequisites[i][1]);

    const vertex = prerequisites[i][0];
    let outdegrees = graph.has(vertex) ? graph.get(vertex) : new Set();
    outdegrees.add(prerequisites[i][1]);
    graph.set(vertex, outdegrees);
  }

  return { graph: graph, starts: starts };
};
