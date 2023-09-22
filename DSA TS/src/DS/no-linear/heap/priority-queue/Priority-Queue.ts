class PriorityQueue {
    public heap : {value: string, priority: number}[]
    constructor () {
        this.heap = [];
    }

    bubbleUp () {
        const idx = this.heap.length - 1;
        const currNode = this.heap[idx];
        while(idx > 0) {
            let parentIdx = Math.floor(idx / 2);
            if(this.heap[parentIdx].priority <= currNode.priority) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
        }
    }

    add(value: string, priority: number) {
        this.heap.push({value, priority});
    }
}