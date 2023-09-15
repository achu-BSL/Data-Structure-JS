
import { LinkedList } from "./LinkedList";
import { removeDuplicates } from "./RemoveDuplicates";

const linkedList = new LinkedList();

linkedList.insertAtBegin(2);
linkedList.insertAtBegin(52);
linkedList.insertAtBegin(52);
linkedList.insertAtBegin(52);
linkedList.insertAtBegin(52);
linkedList.insertAtBegin(52);
linkedList.insertAtBegin(52);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(74);
linkedList.insertAtBegin(43);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);
linkedList.insertAtBegin(2);

console.log(linkedList.print());

removeDuplicates(linkedList);

console.log(linkedList.print());