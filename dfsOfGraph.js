function dfsOfGraph(V, adj) {
  let visited = new Array(V).fill(false);// create a visited array with all false
  let res = [];
  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfs(i, adj, visited, res);// call dfs for each node
    }
  }
  return res;
}

function dfs(node, adj, visited, res) {
  visited[node] = true;// mark the node as visited
  res.push(node);// push the node to the result
  for (let i = 0; i < adj[node].length; i++) {
    if (!visited[adj[node][i]]) {
      dfs(adj[node][i], adj, visited, res);// call dfs for each unvisited node
    }
  }
}

// Main execution

console.log(dfsOfGraph(4, [[1, 2], [0, 2], [0, 1, 3], [2]])); // [0,1,2,3]
console.log(dfsOfGraph(4, [[1], [0, 2, 3], [0, 1, 3], [1, 2]])); // [0,1,2,3]

    