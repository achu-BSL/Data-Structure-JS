function captilizeFirst(arr){
    if(arr.length === 1){
        return [arr[0][0].toUpperCase() + arr[0].substr(1)]
    }

    let res = captilizeFirst(arr.slice(0, -1))
    let string = arr.slice(arr.length  - 1)[0][0].toUpperCase() 
                 + arr.slice(arr.length - 1)[0].substr(1)
    res.push(string)
    return res
}
