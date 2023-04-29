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

    Dijkstra(start, end){
        const nodes = new PriorityQueue()
        const distance = {}
        const previous = {}
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
        while(nodes.value.length){
            smallest = nodes.dequeue().val

            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
            }
            if(smallest || distance[smallest] != Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nexNode = this.adjacencyList[smallest][neighbor]
                    //calculate new distace to neighboring node
                    let candidate = distance[smallest] + nexNode.weight
                }
            }
        }
    }
}



const WG = new WeightedGraph()
WG.addVertex("Basila")
WG.addVertex("Nargees")
WG.addVertex("Achu")
WG.addVertex("Mishab")
WG.addVertex("kunja")
WG.addVertex("sidha")

WG.addEdge("Basila", "Nargees", 1)
WG.addEdge("Achu", "Basila", 5)
WG.addEdge("Achu", "Mishab", 2)
WG.addEdge("Achu", "kunja", 3)
WG.addEdge("Achu", "sidha", 2)
WG.addEdge("Mishab", "kunja", 1)
WG.addEdge("Mishab", "sidha", 2)
WG.addEdge("kunja", "sidha", 1)

console.log(WG.adjacencyList)