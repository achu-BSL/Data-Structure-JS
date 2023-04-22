
function pivot(arr, start, end){

    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1; i <= end; i++){
       if(pivot > arr[i]){
         swapIdx++
         let temp = arr[i]
         arr[i] = arr[swapIdx]
         arr[swapIdx] = temp 
       }
    } 

    let temp = arr[start]
    arr[start] = arr[swapIdx]
    arr[swapIdx] = temp

    return swapIdx
}


function quickSort(arr, left, right){

   if(left < right){
      let pivotIdx = pivot(arr, left, right)

      quickSort(arr, left, pivotIdx - 1)

      quickSort(arr, pivotIdx + 1, right)
   }

   return arr

}



const arr = [2, 5, 3, 2,1, 1, 4, 5, 2, 5, 7, 8, 9,2,4,5,3,2,1,3, 5, 6]
const sort = quickSort(arr, 0, arr.length - 1)
console.log(arr)