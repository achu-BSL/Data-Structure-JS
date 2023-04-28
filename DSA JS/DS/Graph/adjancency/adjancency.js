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

    DFS(vtx){
        const data = [vtx]
        const visited = {}
        let adj = this.adjancencyList
        function travese(vertex){
            adj[vertex].forEach(v => {
                if(!visited[v]){
                    data.push(v)
                    visited[v] = true
                    travese(v)
                }
            })
        }
        travese(vtx)
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
console.log(g.DFS("A"))