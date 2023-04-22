// Implement a function called, areThereDuplicates which accepts
// a variable number of arguments, and checks whether there are any 
// duplicates among the arguments passed in.  You can solve this using 
// the frequency counter pattern OR the multiple pointers pattern.


function areTehreDuplicates(){
    let collection = {}

    for(let idx = 0; idx < arguments.length; idx++){
        collection[arguments[idx]] = ++collection[arguments[idx]] || 0
    }

    for(let key in collection){
        if(collection[key] > 1) return true
    }

    return false
}


function areThereDuplicates(...args){
    args.sort((a, b) => a > b)

    let start = 0
    let next = 1

    for(let idx = 0; idx < args.length; idx++){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}


function isThereDupe(...args){
    return Set(args).length != args.length
    //Set(arguments).size != arguments.length
}