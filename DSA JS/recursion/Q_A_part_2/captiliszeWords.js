

function captilizeWords(arr){
    if(arr.length === 1) return [arr[0].toUpperCase()]

    let res = captilizeWords(arr.slice(0, -1))
    res.push(arr.slice(arr.length - 1)[0].toUpperCase())

    return res
}












function  firstWord(arr){
    if(arr.length === 1) return arr[0][0].toUpperCase() + arr[0].substr(1)

    let res = firstWord(arr.slice(0, -1))
    let string = arr.slice(arr.length - 1)[0][0]
    .toUpperCase() + arr.substr[0](1)
    res.push(string)
    return res
}