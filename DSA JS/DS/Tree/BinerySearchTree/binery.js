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

    insert(value){ //itratively
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
            }
            if (value > curr.value){
                if(curr.right === null){
                    curr.right = newNode
                    return this
                }
                curr = curr.right
            }
        }
    }


    insertion(value){ //recursvely
        const node = new Node(value)
        if(!this.root) this.root = node
        else insertNode(this.root, node)

        function insertNode(root, node){
            if(root.value === value)return undefined
            if(root.value < value){
                if(!root.right){
                    root.right = node
                    return 
                }
                insertNode(root.right, node)
            } else if(root.value > value){
                if(!root.left){
                    root.left = node
                    return
                }
                insertNode(root.left, node)
            }
        }

    }


    constains(value){//itratively
        if(!this.root)return false
        let curr = this.root
        let found = false

        while(curr && !found){
            if(curr.value < value)curr = curr.right
            else if(curr.value > value)curr = curr.left
            else return true
        }
        return false
    }

    constainsRec(value, root = this.root){ //recursvely
        if(!root) return false
        if(root.value === value) return true
        if(value < root.value)return this.constainsRec(value, root.left)
        if(value > root.value)return this.constainsRec(value, root.right)
    }

    BFS(){ //Breadth First Search
        let node = this.root,
            data = [],
            queue = []

        queue.push(node)

        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
        }
        return data
    }

    DFSPreOrder(){                        //      10         =
        let data = []                     //   5      16     =  [10, 5, 3, 6, 16, 13, 18]
        function traverse(node){          //  3 6   13  18   =
            data.push(node.value)
            node.left && traverse(node.left)
            node.right && traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    DFSPostOrder(){                     //      10       =
        let data = []                   //   5     16    =  [3, 6, 5, 13, 18, 16, 10]
        function traverse(node){        //  3 6  13  18  =
            node.left && traverse(node.left)
            node.right && traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }

    DFSInOrder(){                        //    10      =
        let data = []                    //  5    16   = [3, 5, 6, 10, 13, 16, 18]
        function traverse(node){         // 3 6  13 18 = 
            node.left && traverse(node.left)
            data.push(node.value)
            node.right && traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    min(root){
        if(!root.left)return root.value
        return this.min(root.left)
    }


    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(!root)return root
        if(value < root.value)root.left = this.deleteNode(root.left, value)
        else if (value > root.value)root.right = this.deleteNode(root.right, value)
        else{
            if(!root.left && !root.right) return null
            if(!root.left)return root.right
            if(!root.right)return root.left
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}



const tree = new BinerySearchTree()
tree.insertion(10)
tree.insertion(19)
tree.insertion(5)
tree.insertion(14)
tree.insertion(17)
tree.insertion(6)
tree.insertion(15)
tree.insertion(13)
console.log(tree.BFS())
tree.delete(5)
console.log(tree.DFSPreOrder())
console.log(tree.root)
// console.log(tree.DFSInOrder())
// console.log(tree.DFSPostOrder())
