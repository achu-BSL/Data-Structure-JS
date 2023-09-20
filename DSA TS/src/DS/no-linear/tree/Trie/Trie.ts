class TNode {
  public children: { [key: string]: TNode };
  public isWordEnd: boolean;
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

export class Trie {
  public root: TNode;
  constructor() {
    this.root = new TNode();
  }

  addWord(value: string) {
    let currNode = this.root;
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (!currNode.children[char]) {
        currNode.children[char] = new TNode();
      }
      currNode = currNode.children[char];
    }
    currNode.isWordEnd = true;
  }

  print() {
    const result = [] as string[];
    function helperFunction(currNode: TNode, word = "") {
      if (currNode.isWordEnd) result.push(word);
      for (let [char, childNode] of Object.entries(currNode.children)) {
        helperFunction(childNode, word + char);
      }
    }
    helperFunction(this.root);

    return result;
  }

  private deleteHeleper(node: TNode, idx: number, word: string) {
    if (idx === word.length) {
      node.isWordEnd = false;
      return Object.keys(node.children).length === 0;
    }

    const char = word[idx];
    if (!node.children[char]) return false;

    const shouldDeleteThisNode = this.deleteHeleper(
      node.children[char],
      idx + 1,
      word
    );
    if (shouldDeleteThisNode) {
      delete node.children[char];
      return Object.keys(node.children).length === 0;
    }
    return false;
  }

  delete(word: string) {
    this.deleteHeleper(this.root, 0, word);
  }
}
