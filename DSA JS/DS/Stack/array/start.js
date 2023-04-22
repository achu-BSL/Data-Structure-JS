const stack = []

stack.push("amazon")
stack[stack.length] = "achu"

console.log("------------------------------------")
console.log(stack)
console.log("====================================")


stack.length--
console.log(stack)


class Stack{
    arr = []
    push(value){
        this.arr[this.arr.length] = value
    }

    pop(){
        this.arr.length--
    }
}

const obj = new Stack()
obj.push("nargees")
obj.push("achu")
console.log(obj.arr)
obj.pop()
console.log(obj.arr)