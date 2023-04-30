class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let idx = 0; idx < word.length; idx++){
            let charToInsert = word[idx]
            if(!curr.children[charToInsert]){
                curr.children[charToInsert] = new Node()
            }
            curr = curr.children[charToInsert]
        }
        curr.isWordEnd = true
    }

    traverse(){
        let words = []
        function traverseHelper(node, word){
            if(node.isWordEnd) words.push(word)
            for(let [char, childNode] of Object.entries(node.children)){
                traverseHelper(childNode, word + char)
            }
        }
        traverseHelper(this.root, '') 
        return words
    }

    contain(word){
        let curr = this.root
        for(let idx = 0; idx < word.length; idx++){
            let char = word[idx]
            if(!curr.children[char]) return false
            curr = curr.children[char]
        }
        return curr.isWordEnd
    }

    prefix(letters){
        let curr = this.root
        for(let idx = 0; idx < letters.length; idx++){
            curr = curr.children[letters[idx]]
        }
        const prefixes = []
        function helper(node, word){
            if(node.isWordEnd)prefixes.push(word)
            for(let [char, childNode] of Object.entries(node.children)){
                helper(childNode, word + char)
            }
        }
        helper(curr, letters)
        return prefixes
    }

    delete(word){
        this.deleteHelper(this.root, 0, word)
    }
    deleteHelper(node, idx, word){
        if(idx === word.length){
            node.isWordEnd = false
            return Object.keys(node.children).length === 0
        }
        let char = word[idx]
        if(!node.children[char])return false

        let shouldDeleteCurrentNode = this.deleteHelper(node.children, idx + 1, word)
        if(shouldDeleteCurrentNode){
            delete node.children[char]
            return Object.keys(node.chidren).length === 0
        }
        return false
    }
}

const tr = new Trie()
tr.insert("Achu")
tr.insert("Asar")
tr.insert("Asma")
tr.insert("Asharudeen")
tr.insert("Basi")
console.log(tr.traverse())
console.log(tr.prefix("As"))