function collectOddNums(arr){
    let result = []
    
    function helper(helperInput){

        if(helperInput.length === 0){
            return 
        }

        if(helperInput[0] % 2){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))

    }
    helper(arr)

    return result
}

let arr = [1,3,4,5,6,7,4,3]
console.log(collectOddNums(arr))
console.log(arr)

