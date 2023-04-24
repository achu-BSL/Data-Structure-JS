class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
        this.tail = null
        this.tempStack = []
    }
    push(value){
        const node = new Node(value)
        if(!this.head)this.tail = node
        node.next = this.head
        this.head = node
    }

    pop(){
        if(!this.head) return undefined
        let value = this.head.value
        this.head = this.head.next
        if(!this.head)this.tail = null
        return value
    }

    undo(){
        this.tempStack.push(this.pop())
    }
    redo(){
        this.push(this.tempStack.pop())
    }

    print(){
        let listValues = ''
        let cur = this.head

        while(cur){
            listValues += `${cur.value} `
            cur = cur.next
        }
        console.log(listValues)
    }

}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(40)
stack.push(90)
stack.push(30)
stack.print()
stack.undo()
stack.print()
stack.redo()
stack.print()