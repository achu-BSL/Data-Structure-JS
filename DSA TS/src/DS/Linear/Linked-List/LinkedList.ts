
class LLNode {
    public value: number;
    public next: LLNode | null
    constructor(value: number) {     
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    private head: LLNode | null;
    constructor() {
        this.head = null;
    }

    insertAtEnd(value: number) {
        const node = new LLNode(value);
        if(this.head === null) {
            this.head = node;
            return;
        }
        let currNode = this.head;
        while(currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = node;
    }

    removeFromEnd(): string | number {
        if(this.head === null) {
            return "Linked List is empty";
        }

        if(this.head.next === null) {
            const value = this.head.value;
            this.head = null;
            return value;
        }

        let currNode = this.head;
        while(currNode.next && currNode.next.next) {
            currNode = currNode.next;
        }
        const value = currNode.next!.value;
        currNode.next = null;

        return value;
    }

    insertAtBegin (value: number) {
        const node = new LLNode(value);
        if(this.head !== null) {
            node.next = this.head;
        }

        this.head = node;
    }

    removeFromBegin (): string | number {
        if(this.head === null) {
            return "Linked List is empty";
        }

        const value = this.head.value;
        if(this.head.next){
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        
        return value
    }



    print (): string {
        if(this.head === null) {
            return "Linked List is empty";
        }
        let result = "";
        let currNode = this.head;
        while(currNode.next) {
            result += `${currNode.value} -> `;
            currNode = currNode.next;
        }
        result += `${currNode.value}`;
        return result;
    }
}

const linkedList = new LinkedList();

linkedList.insertAtEnd(30);
linkedList.insertAtEnd(29);
linkedList.insertAtEnd(10);
linkedList.insertAtBegin(49);
linkedList.insertAtBegin(43);
linkedList.insertAtBegin(90);
linkedList.insertAtBegin(23);

console.log(linkedList.print());
console.log(linkedList.removeFromEnd());
console.log(linkedList.removeFromEnd());
console.log(linkedList.removeFromEnd());
console.log(linkedList.removeFromEnd());

console.log(linkedList.removeFromBegin());
console.log(linkedList.removeFromBegin());
console.log(linkedList.removeFromBegin());