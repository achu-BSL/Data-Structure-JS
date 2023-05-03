class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        this.values.push({val, priority})
        this.sort()
    }
    dequeue(){
        return this.values.shift()
    }
    sort(){
        this.values.sort((a, b) => a.priority - b.priority)
    }
}
class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(value){
        this.adjacencyList[value] = []
    }

    addEdge(v1, v2, weight){
        const adj = this.adjacencyList
        adj[v1].push({node: v2, weight})
        adj[v2].push({node: v1, weight})
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue()
        const distance = {}
        const previous = {}
        const path = [] // to return at the end
        let smallest
        //build in initail state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distance[vertex] = 0
                nodes.enqueue(vertex, 0)
            }
            else{
                distance[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val

            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distance[smallest] != Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    //calculate new distace to neighboring node
                    let candidate = distance[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if(candidate < distance[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distance[nextNeighbor] = candidate
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}



const WG = new WeightedGraph()
WG.addVertex("A")
WG.addVertex("B")
WG.addVertex("C")
WG.addVertex("D")
WG.addVertex("E")
WG.addVertex("F")

WG.addEdge("A", "B", 4)
WG.addEdge("A", "C", 2)
WG.addEdge("B", "E", 3)
WG.addEdge("C", "D", 2)
WG.addEdge("C", "F", 4)
WG.addEdge("D", "E", 3)
WG.addEdge("D", "F", 1)
WG.addEdge("E", "F", 1)

console.log(WG.Dijkstra("A", "E"))

console.log(WG.adjacencyList)