import { LLNode, LinkedList } from "./LinkedList";


const removeByIndex = (linkedList: LinkedList, idx: number): string | number => {
    if(idx < 0) {
        return "Not a valid index";
    }

    if(idx === 0) {
        if(!linkedList.head) {
            return "Linked List is empty";
        }
        const value = linkedList.head.value;
        linkedList.head = linkedList.head.next;
        return value;
    }

    let currNode = linkedList.head;
    let prevNode: LLNode | null = null;
    let currIndex = 0;
    
    while(currNode) {
        if(currIndex === idx) {
            prevNode!.next = currNode.next;
            return currNode.value;
        }

        prevNode = currNode;
        currNode = currNode.next;
        currIndex ++;
    }

    return "There is no node within the index";
}

const linkedList = new LinkedList();

linkedList.insertAtBegin(2);
linkedList.insertAtBegin(8);
linkedList.insertAtBegin(12);
linkedList.insertAtBegin(82);
linkedList.insertAtBegin(34);
linkedList.insertAtBegin(27);

console.log(linkedList.print());

console.log(removeByIndex(linkedList, 2));
console.log(removeByIndex(linkedList, 2));
console.log(removeByIndex(linkedList, 2));
console.log(removeByIndex(linkedList, 2));
console.log(removeByIndex(linkedList, 2));

console.log(linkedList.print());