
function maxSubarray(arr, num){
    if(num > arr.length) return false
    let maxSum = 0

    for(let idx = 0; idx < num; idx++){
        maxSum += arr[idx]
    }

    let tempSum = maxSum

    for(let idx = num; idx < arr.length; idx++){
        tempSum = tempSum - arr[idx - num] + arr[idx]
        maxSum = Math.max(maxSum, tempSum)
    } 

    return maxSum
}