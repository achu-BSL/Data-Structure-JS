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
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        return ++this.size
    }

    pop(){
        if(!this.head) return null
        let temp = this.head
        if(this.head === this.tail){
            this.tail = null
        } 
            this.head = this.head.next 
            this.size--
        return temp.value
    }
}


function print (list){
    if(!list.head)return null
    let listValues = ''
    let curr = list.head
    while(curr){
        listValues += `${curr.value} `
        curr = curr.next
    }
    console.log(listValues)
}

const list = new LinkedList()
list.push("Nargees")
list.push("achu")
print(list)
list.pop()
print(list)