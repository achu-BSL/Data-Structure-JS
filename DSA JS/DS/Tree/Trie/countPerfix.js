class Node{
    constructor(){
        this.childrens = {}
        this.endWord = 0
        this.prefixCount = 0 
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let idx = 0; idx < word.length; idx++){
            let char = word[idx]
            if(curr.childrens[char]){
                curr.prefixCount++
            } else {
                curr.childrens[char] = new Node()
            }
            curr = curr.childrens[char]
        }
        curr.endWord++
    }
    delete(word){
        this.erase(word, this.root, 0)
    }
    erase(word, node = this.root, idx = 0){
        if(word.length === idx){
            node.endWord--
            if(!node.endWord){
                return Object.keys(node.childrens).length === 0
            }
            return false
        }

        let char = word[idx]
        if(!node.childrens[char])return false

        let shouldDeleteCurrentNode = this.erase(word, node.childrens[char], idx + 1)
        if(shouldDeleteCurrentNode){
            delete node.childrens[char]
            return Object.keys(node.childrens).length === 0
        }
        return false
    }

    traverse(){
        const words = []
        function traverseHelper(word, node){
            if(node.endWord){
                for(let n = 1; n <= node.endWord; n++){
                    words.push(word)
                }
            }
            for(let [char, childNode] of Object.entries(node.childrens)){
                traverseHelper(word + char, childNode)
            }
        }
        traverseHelper('', this.root)
        return words
    }

    countPerfix(word){
        let curr = this.root
        for(let idx = 0; idx < word.length - 1; idx++){
            let char = word[idx]
            curr = curr.childrens[char]
        }
        return curr.prefixCount
    }
}

const tr = new Trie()
tr.insert("Apple")
tr.insert("Apple")
tr.insert("Apps")
tr.insert("Ap")
console.log(tr.traverse())
console.log(tr.countPerfix("Ap"))
tr.erase("Apple")
console.log(tr.traverse())
console.log(tr.root.childrens["A"].prefixCount)
