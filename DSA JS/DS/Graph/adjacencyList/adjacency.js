class Graph{
    constructor(){
        this.adjancencyList = {}
    }

    addVertex(vertex){
        this.adjancencyList[vertex] = []
    }

    addEdges(vertex1, vertex2){
        this.adjancencyList[vertex1].push(vertex2)
        this.adjancencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        let adj = this.adjancencyList
        adj[vertex1] = adj[vertex1].filter(v => v !== vertex2)
        adj[vertex2] = adj[vertex2].filter(v => v !== vertex1)
    }

    removeVertex(vertex){
        let adj = this.adjancencyList
        adj[vertex].forEach(v => {
            adj[v] = adj[v].filter(vtx => vtx !== vertex)
        })
        delete adj[vertex]

        // while(adj[vertex].length){
        //     const adjVertex = adj[vertex].pop()
        //     this.removeEdge(vertex, adjVertex)
        // }
        // delete adj[vertex]
    }

    deapthFirstSearch(vertex){
        const data = []
        const visited = {}
        const adj = this.adjancencyList
        function dfs(vtx){
            if(!vtx)return null
            visited[vtx] = true
            data.push(vtx)
            adj[vtx].forEach(v => {
                if(!visited[v]){
                    return dfs(v)
                }
            })
        }
        dfs(vertex)
        return data
    }

    dfsIterative(vertex){
        let data = []
        let stack = [vertex]
        let visited = {}
        visited[vertex] = true
        while(stack.length){
            let vtx = stack.pop()
            data.push(vtx)
            this.adjancencyList[vtx].forEach(v =>{
                if(!visited[v]){
                    visited[v] = true
                    stack.push(v)
                }
            })
        }
        return data
    }

    BFS(vertex){
        let queue = [vertex]
        let data = []
        let visited = {}
        visited[vertex] = true
        while(queue.length){
            let curVtx = queue.shift()
            data.push(curVtx)
            this.adjancencyList[curVtx].forEach(v => {
                if(!visited[v]){
                    visited[v] = true
                    queue.push(v)
                }
            })
        }
        return data
    }
}

const g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdges("A", "B")
g.addEdges("A", "C")
g.addEdges("B", "D")
g.addEdges("C", "E")
g.addEdges("D", "E")
g.addEdges("D", "F")
g.addEdges("E", "F")
console.log(g.BFS("A"))