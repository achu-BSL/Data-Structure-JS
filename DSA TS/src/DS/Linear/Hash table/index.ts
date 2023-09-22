import { HashTable } from "./SeperateChaining";

const hashTable = new HashTable(10);

hashTable.set("achu", "achus value");
hashTable.set("basi", "basi's value");
hashTable.set("misu", "misu");
hashTable.set("acuh", "achus value");

console.log(hashTable.get("achu"));