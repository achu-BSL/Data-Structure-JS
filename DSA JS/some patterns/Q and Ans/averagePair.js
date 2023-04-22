function averagePair(arr, num){
    let start = 0
    let end = arr.length - 1

    while(start < end){
        let avg = (arr[start] + arr[end]) / 2
        if(avg === num) return true

        if(avg > num) end --
        else start++
    }

    return false
}