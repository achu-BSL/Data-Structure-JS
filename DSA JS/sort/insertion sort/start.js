
const arr = [4, 3, 2, 1, 7, 0]
     //   _  0  1  1  3  4  7

for(let i = 1; i < arr.length; i++){
    let currVal = arr[i]
    for(var j = i - 1; j >= 0 && arr[j] > currVal; j--){
        arr[j + 1] = arr[j]
    }
    arr[j + 1] = currVal
}

console.log(arr)


