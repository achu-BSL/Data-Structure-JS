import { LLNode, LinkedList } from "./LinkedList";

interface AlreadyExist {
  [key: string]: true;
}

export const removeDuplicates = (linkedList: LinkedList) => {
  const alreadyExist: AlreadyExist = {};

  if (!linkedList.head) {
    return "Linked List is empty";
  }

  let currNode: LLNode | null = linkedList.head;
  let prevNode: LLNode | null = null;
  while (currNode) {
    if (alreadyExist[currNode.value]) {
      prevNode!.next = currNode.next;
    } else {
      alreadyExist[currNode.value] = true;
      prevNode = currNode;
    }
    currNode = currNode.next;
  }

  return "Removed duplicates successfully";
};
