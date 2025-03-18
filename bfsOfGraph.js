function bfsOfGraph(v,adj){
    let visited = new Array(v).fill(false);
    let queue = [];
    let result = [];
    queue.push(0);
    visited[0] = true;
    while(queue.length){
        let node = queue.shift();
        result.push(node);
        for(let i=0;i<adj[node].length;i++){
            if(!visited[adj[node][i]]){
                queue.push(adj[node][i]);
                visited[adj[node][i]] = true;
            }
        }
    }
    return result;
}


// Main execution

console.log(bfsOfGraph(4, [[1,2],[0,2],[0,1,3],[2]])); // [0,1,2,3]
console.log(bfsOfGraph(4, [[1],[0,2,3],[0,1,3],[1,2]])); // [0,1,2,3]
console.log(bfsOfGraph(4, [[1,2],[0,2,3],[0,1,3],[1,2]])); // [0,1,2,3]
console.log(bfsOfGraph(4, [[1],[0,2],[0,1,3],[2]])); // [0,1,2,3]