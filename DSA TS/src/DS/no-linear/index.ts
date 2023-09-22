import { Trie } from "./tree/Trie/Trie";

const trie = new Trie();

trie.addWord("Basi");
trie.addWord("Achu");
trie.addWord("Azma");
trie.addWord("Mishab");

console.log("Hello");
console.log(trie.print());

trie.delete("Achu");

console.log(trie.print());
