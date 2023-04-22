function pivot(arr, start = 0, end = arr.length + 1){
    function swap (arr, i, j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1; i < end; i++){
        if(pivot > arr[i]){ 
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, swapIdx, start)

    return swapIdx
}



function quickSort(arr, left = 0, right = arr.length -1){ 
    if(left < right){
       let pivotIdx = pivot(arr, left, right)
       //left
       quickSort(arr, left, pivotIdx - 1)
       //right
       quickSort(arr, pivotIdx + 1, right)
    }
    return arr
}

const arr = [7, 2, 5, 3, 7, 1, 1, 3, 6, 8, 2, 7, 3, 5, 3, 2, 3]              
const sorted = quickSort(arr)
console.log(arr)

