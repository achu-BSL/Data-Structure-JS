class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    dequeue(){
        if(!this.head)return null
        if(this.head === this.tail) this.tail = null

        let temp = this.head
        this.head = this.head.next

        return temp.value
    }
}

const list = new LinkedList()
list.enqueue(10)
list.enqueue(20)
list.add(30)
console.log(list.remove())
console.log(list.remove())
console.log(list.remove())