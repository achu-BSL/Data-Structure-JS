class TreeNode {
    public value: number;
    public left : TreeNode | null;
    public right : TreeNode | null;
    constructor (value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BineryTree {
    public root : TreeNode | null;
    constructor () {
        this.root = null;
    }

    insert(value: number) {
        const node = new TreeNode(value);
        if(this.root === null) {
            this.root = node;
        } else {
            let currNode = this.root;
            while(currNode) {
                if(value > currNode.value) {
                    if(currNode.right === null) {
                        currNode.right = node;
                        break;
                    } 
                    currNode = currNode.right;
                } else {
                    if(currNode.left === null) {
                        currNode.left = node;
                        break;
                    }
                    currNode = currNode.left;
                }
            }
        }
    }

    min(node: TreeNode): number {
        if(!node.left) return node.value;
        return this.min(node.left);
    }

    remove(value: number) {
        this.deleteNode(this.root, value);
    }

    private deleteNode(root: TreeNode | null, value: number) {
        if(!root) return root;
        if(value < root.value) root.left = this.deleteNode(root.left, value)
        else if(value > root.value) root.right = this.deleteNode(root.right, value)
        else {
            if(!root.left && !root.right) return null;
            if(!root.left) return root.right;
            if(!root.right) return root.left;
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
        
    }
}