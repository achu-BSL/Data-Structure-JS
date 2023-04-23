class HashTable{
    constructor(size = 17){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0

        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key, value){
        const idx = this.hash(key)
        const bucket = this.table[idx]

        if(!bucket){
            this.table[idx] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(items => items[0] === key)

            if(sameKeyItem){
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }


    get(key){
        const idx = this.hash(key)
        const bucket = this.table[idx]

        if(bucket){
            const sameKey = bucket.find(items => items[0] === key)

            if(sameKey){
                return sameKey[1]
            }
        }

        return undefined
    }

    remove(key){
        const idx = this.hash(key)
        const bucket = this.table[idx]

        if(bucket){
            const sameKey = bucket.find(items => items[0] === key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }

    display(){
        this.table.forEach(items => console.log(items))
    }   
}

const table = new HashTable(3)
table.set("name", "Asharudeen")
table.set("domain", "MERN")
table.set("age", 19)
table.set("rmv", "remove me")
console.log(table.get("name"))
table.remove("rmv")
table.display()




















