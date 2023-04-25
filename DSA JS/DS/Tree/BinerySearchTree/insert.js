class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinerySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let curr = this.root

        while(true){
            if(curr.value === value)return undefined
            if(value < curr.value){
                if(curr.left === null){
                    curr.left = newNode
                    return this
                }
                curr = curr.left
            } else if (value > curr.value){
                if(curr.right === null){
                    curr.right = newNode
                    return this
                }
                curr = curr.right
            }
        }
    }
}



const tree = new BinerySearchTree()
tree.insert(10)
tree.insert(19)
tree.insert(5)
tree.insert(14)
tree.insert(17)
tree.insert(6)
tree.insert(15)
tree.insert(13)
console.log(tree.root)
console.log(tree.root.right.left.right)