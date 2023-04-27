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

const PQ = new PriorityQueue()

PQ.enqueue("mouse", 7)
PQ.enqueue("Achu", 2)
PQ.enqueue("G-wagon", 3)
PQ.enqueue("phone", 9)
PQ.enqueue("dominar", 4)
PQ.enqueue("house", 5)
PQ.enqueue("computer", 6)
PQ.enqueue("hedset", 10)
PQ.enqueue("nargees", 1)
PQ.enqueue("keyboard", 8)

console.log(PQ.values)
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
console.log(PQ.dequeue())
