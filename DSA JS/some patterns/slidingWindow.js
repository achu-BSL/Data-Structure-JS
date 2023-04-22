


function maxSubarrySum (arr, num){
    if(num > arr.length){
        return null
    }

    let max = -Infinity

    for(let i = 0; i < arr.length - num + 1; i++){
        let temp = 0
        for(let j = 0; j < num; j++){
            temp += arr[i + j]
        }
        if(temp > max){
            max = temp
        }
    }
    return max
}



//sliding window

function maxSubarraySum(arr, num){
    if(arr.length < num) return null
    let maxSum = 0
    let tempSum = 0

    for(let idx = 0; idx < num; idx++){
        maxSum += arr[idx]
    }
    tempSum =  maxSum
    for(let idx = num; idx < arr.length; idx++){
        tempSum = tempSum - arr[idx - num] + arr[idx]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}



console.log(maxSubarraySum([1, 2, 4, 5, 3, 2, 6, 7, 8], 3))