export class HashTable {
  public table: [string, string][][];
  constructor(size: number) {
    this.table = Array(size);
  }

  hash(key: string) {
    const length = this.table.length;
    let charCode = 0;
    for (let i = 0; i < key.length; i++) {
      charCode += key.charCodeAt(i);
    }
    return charCode % length;
  }

  set(key: string, value: string) {
    const idx = this.hash(key);
    const bucket = this.table[idx];
    if (!bucket) {
      console.log("creating new bucket");
      this.table[idx] = [[key, value]];
    } else {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key: string) {
    const idx = this.hash(key);
    if (this.table[idx].length) {
      for (const item of this.table[idx]) {
        if (item[0] === key) return item[1];
      }
    }
    return "No value fond within the key";
  }
}
