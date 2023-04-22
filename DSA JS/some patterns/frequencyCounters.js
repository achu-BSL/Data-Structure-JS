// function same(arr1, arr2){

//     if(arr1.length != arr2.length){
//         return false
//     }

//     for(let idx = 0; idx < arr1.length; idx++){
//         const correctIdx = arr2.indexOf(arr1[idx] ** 2)
//         if(correctIdx === -1){
//             return false
//         }

//         arr2.splice(correctIdx, 1)
//     }

//     return true
// }   // O(N^2)


function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false
    }

    const freqCounter1 = {}
    const freqCounter2 = {}

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }

    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    for(key in freqCounter1){
        console.log(key);
        if(!(key ** 2 in freqCounter2)){
            return false
        }
        if(freqCounter1[key] != freqCounter2[key ** 2]){
            return false
        }  
    }
    return true

}



// console.log(same([ 2, 3, 2], [ 8, 4, 4]))



//-----------------ANAGRAM-------------------------


function anagram(str1, str2){
    if(str1.length != str2.length){
        return false
    }

    const freqCounter1 = {}
    const freqCounter2 = {}

    for(let char of str1){
        freqCounter1[char] = (freqCounter1[char] || 0) + 1
    }

    for(let char of str2){
        freqCounter2[char] = (freqCounter2[char] || 0) + 1
    }

    for(let key in freqCounter1){
        if(!(key in freqCounter2)){
            return false
        }
        if(freqCounter2[key] != freqCounter1[key]){
            return false
        }
    }

    return true
}

// console.log(anagram("achub", "bachu"));



function validAnagram(str1, str2){
    // str1 = str1.toString()
    // str2 = str2.toString()
    if(str1.length != str2.length){
        return false
    }

    const lookup = {}

    for(let char of str1){
        lookup[char] ? lookup[char]++ : lookup[char] = 1
    }

    for(let char of str2){
        
        if(!lookup[char]){
            return false
        } else {
            lookup[char]--
        }
    }
    return true
}

console.log(validAnagram(1234, 3421));

