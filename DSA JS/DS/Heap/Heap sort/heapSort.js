class BineryHeap{
    constructor(){
        this.values = []
    }

    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0){
            const parentIdx = Math.floor((idx - 1) / 2)
            const parent = this.values[parentIdx]
            if(parent >= element) break
            this.values[idx] = parent
            this.values[parentIdx] = element
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
        const element = this.values[0]
        const length = this.values.length
        while(true){
            let leftIdx = 2 * idx + 1,
                rightIdx = 2 * idx + 2,
                swap = null,
                leftChild, rightChild

            if(leftIdx < length){
                leftChild = this.values[leftIdx]
                if(leftChild > element)swap = leftIdx
            }
            if(rightIdx < length){
                rightChild = this.values[rightIdx]
                if((!swap && element < rightChild) ||
                   (swap && leftChild < rightChild)
                ) swap = rightIdx
            }
            if(!swap) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

    heapSort(){
        const length = this.values.length
        for(let idx = length - 1; idx > 0; idx--){
            [arr[idx], arr[0]] = [arr[0], arr[idx]]
            this.heapify(this.values, 0, idx)
        }
    }

    buildHeap(arr){

        for(let idx = Math.floor(arr.length - 1 / 2); idx >= 0; idx--){
            this.heapify(arr, idx, arr.length)
        }
    }

    heapify(arr, idx, n){
        let largest = idx
        let leftIdx = 2 * idx + 1,
            rightIdx = 2 * idx + 2
        
        if(leftIdx < n && arr[leftIdx] > arr[largest]) largest = leftIdx
        if(rightIdx < n && arr[rightIdx] > arr[largest]) largest = rightIdx
        if(idx != largest){
            [arr[idx], arr[largest]] = [arr[largest], arr[idx]]
            this.heapify(arr, largest, n)
        }
    }


}

const heap = new BineryHeap()
const arr = [1, 2, 5, 21, 6, 12, 15, 20]
heap.buildHeap(arr)
console.log(arr)
