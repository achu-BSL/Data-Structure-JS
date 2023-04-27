class MaxBineryHeap{
    constructor(){
        this.values = []
    }

    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if( parent >= element) break
            console.log(`el : ${element}  par :  ${parent}`)
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx  
        }

    }

    extractMax(){
        const max = this.values[0]
        const end = this.values.pop()
        if(this.values.length){
            this.values[0] = end
            this.bubbleDown()
        }
        return max
    }

    bubbleDown(){
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftIdx = 2 * idx + 1
            let rightIdx = 2 * idx + 2
            let swap = null
            let leftChild, rightChild

            if(leftIdx < length){
                leftChild = this.values[leftIdx]
                if(element < leftChild) swap = leftIdx
            }
            if(rightIdx < length){
                rightChild = this.values[rightIdx]
                if((!swap && element < rightChild) || 
                   (swap && rightChild > leftChild)
                ) swap = rightIdx
            }

            if(!swap) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element

            idx = swap
        }
    }
}

const heap = new MaxBineryHeap()
heap.insert(10)
heap.insert(56)
heap.insert(34)
heap.insert(12)
heap.insert(32)
heap.insert(9)
console.log(heap.values)

console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.extractMax())