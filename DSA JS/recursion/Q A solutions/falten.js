function faltten(oldArr){
    let newArr = []

    for(let idx = 0; idx < oldArr.length; idx++){
        if(Array.isArray(oldArr[idx])){
            newArr = newArr.concat(faltten(oldArr[idx]))
        } else {
            newArr.push(oldArr[idx])
        }
    }

    return newArr
}