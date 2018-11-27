/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

//DFS
var findItinerary = function (tickets) {
  let dict = new Map();
  tickets.forEach(t => {
    dict.has(t[0]) ? dict.set(t[0], [...dict.get(t[0]), t[1]]) : dict.set(t[0], [t[1]]);
  });
  for (d of dict.values()) { d.sort(); }

  let res = [];
  dfs(res, dict, "JFK");
  return res;
};

var dfs = function(res, dict, fromAirport) {
  const toAirports = dict.get(fromAirport);
  while(toAirports && toAirports.length) {
    dfs(res, dict, toAirports.shift());
  }
  res.unshift(fromAirport);
};

//Back-tracking
var findItinerary = function (tickets) {
  let dict = new Map();
  tickets.forEach(t => {
    dict.has(t[0]) ? dict.set(t[0], [...dict.get(t[0]), t[1]]) : dict.set(t[0], [t[1]]);
  });
  for (d of dict.values()) { d.sort(); }

  let res = [], visited = ["JFK"];
  addAirport(res, visited, dict, "JFK", tickets.length + 1);
  return res[0];
};

var addAirport = function (res, visited, dict, fromAirport, count) {
  if(res.length) return;
  if(visited.length === count) {
    res.push(visited);
    return;
  }

  const toAirports = dict.get(fromAirport);
  if(toAirports && toAirports.length) {
    for(let i = 0; i < toAirports.length; i++) {
      visited.push(toAirports[i]);
      let newToAirports = toAirports.slice(0);
      newToAirports.splice(i, 1);
      dict.set(fromAirport, newToAirports);
      addAirport(res, visited.slice(0), dict, toAirports[i], count);
      visited.pop();
      dict.set(fromAirport, toAirports);
    }
  }
};
