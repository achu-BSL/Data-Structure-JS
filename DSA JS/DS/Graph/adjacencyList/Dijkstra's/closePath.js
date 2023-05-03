// class Node{
//     constructor(value, priority){
//         this.value = value
//         this.priority = priority
//     }
// }
// class PrioriTyQueue{
//     constructor(){
//         this.heap = []
//     }

//     enqueue(value, priority){
//         const node = new Node(value, priority)
//         this.heap.push(node)
//         this.bubbleUp()
//     }
//     bubbleUp(){
//         let idx = this.heap.length - 1
//         const node = this.heap[idx]
//         while(idx > 0){
//             const parentIdx = Math.floor((idx - 1) / 2)
//             const parent = this.heap[parentIdx]
//             if(node.priority >= parent.priority) break
//             this.heap[idx] = parent
//             this.heap[parent] = node
//             idx = parentIdx
//         }
//     }

//     dequeue(){
//         const min = this.heap[0]
//         const end = this.heap.pop()
//         if(this.heap.length){
//             this.heap[0] = end
//             this.bubbleDown()
//         }
//         return min
//     }
//     bubbleDown(){
//         let idx = 0
//         const length = this.heap.length
//         const node = this.heap[0]
//         while(true){
//             let leftIdx = 2 * idx + 1, 
//                 rightIdx = 2 * idx + 2,
//                 rightNode, leftNode, swap = null

//             if(leftIdx < length){
//                 leftNode = this.heap[leftIdx]
//                 if(leftNode.priority < node.priority) swap = leftIdx
//             }
//             if(rightIdx < length){
//                 rightNode = this.heap[rightIdx]
//                 if((!swap && node.priority > rightNode.priority) ||
//                    (swap && leftNode.priority > rightNode.priority)
//                 ) swap = rightIdx
//             } 
//             if(!swap) break
//             [this.heap[swap], this.heap[idx]] = [this.heap[idx], this.heap[swap]] 
//             idx = swap
//         }
//     }
// }
class Node{
    constructor(value, priority){
        this.value = value
        this.priority = priority
    }
}
class PriorityQueue{
    constructor(){
        this.values = []
    }

    enqueue(element, priority){
        const node = new Node(element, priority)
        this.values.push(node)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if(parent.priority <= element.priority) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }


    dequeue(){
        let min = this.values[0]
        let end = this.values.pop()
        if(this.values.length){
            this.values[0] = end
            this.bubbleDown()
        }
        return min
    }

    bubbleDown(){
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftIdx = 2 * idx + 1,
                rightIdx = 2 * idx + 2,
                swap = null,
                leftChild, rightChild

            if(leftIdx < length){
                leftChild = this.values[leftIdx]
                if(leftChild.priority < element.priority)swap = leftIdx
            }  
            if(rightIdx < length){
                rightChild = this.values[rightIdx]
                if((!swap && rightChild.priority < element.priority) ||
                   (swap && rightChild.priority < leftChild.priority)
                ) swap = rightIdx
            }  

            if(!swap) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}

class Dijkstra{
    constructor(){
        this.adjacencyList = {}
    }
    
    addVertex(value){
        const adj = this.adjacencyList
        if(!adj[value])adj[value] = []
    }

    addEdge(v1, v2, weight){
        const adL = this.adjacencyList
        adL[v1].push({node: v2, weight})
        adL[v2].push({node: v1, weight})
    }
    removeEdge(v1, v2){
        const adL = this.adjacencyList
        adL[v1] = adL[v1].filter(v => v.node != v2)
        adL[v2] = adL[v2].filter(v => v.node != v1)
    }

    removeVertex(vtx){
        const adL = this.adjacencyList
        adL[vtx].forEach( v => {
            adL[v.node] = adL[v.node].filter(vt => vt.node != vtx)
        })
        delete adL[vtx]
    }

    shortPath(start, finish){
        const nodes = new PriorityQueue()
        const distance = {}
        const previous = {}
        const path = [] // to return at the end
        let smallest
        const adL = this.adjacencyList
        //build in initial state
        for(let vertex in adL){
            if(vertex === start){
                distance[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distance[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        } 

        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().value

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
                for(let idx in adL[smallest]){
                    //find neighboring node 
                    let nextEdge = adL[smallest][idx]
                    //calculate new distance to neighboring node
                    let candidate = distance[smallest] + nextEdge.weight
                    let nextNode = nextEdge.node
                    if(candidate < distance[nextNode]){
                        //updating new smallest distance to neighbor
                        distance[nextNode] = candidate
                        //updating previous - How we got to neighbor
                        previous[nextNode] = smallest
                        //enque in priority queue with new prirority
                        nodes.enqueue(nextNode, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

const WG = new Dijkstra()

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
console.log(WG.shortPath("A", "E"))