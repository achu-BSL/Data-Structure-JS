function sumZero(arr){
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]

        if(sum === 0){
           return [arr[left], arr[right]]
        }

        if(sum > 0){
            right--
        } else {
            left++
        }
    }
    return -1
}

// console.log(sumZero([-5, -3, -2, 0 , 2, 4, 6, 7]));



//--------count unique value in sorted array--------------------

function countUniqueValues(arr){
    if(arr.length == 0){
        return null
        
    }
    let i = 0
    
    for(let j = 1; j < arr.length; j++){
        if(arr[i] != arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    console.log(i+1)
}

countUniqueValues([1,2,2,2,3,3,4,5,6,6,6,7,7])