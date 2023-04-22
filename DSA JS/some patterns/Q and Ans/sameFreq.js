// Write a function called sameFrequency. Given two positive integers,
//  find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities


function sameFrequency(num1, num2){
    let str1 = num1.toString()
    let str2 = num2.toString()

    if(str1.length != str2.length) return false


    let count1 = {}
    let count2 = {}

    for(let num of str1){
        count1[num] = (count1[num] || 0) + 1
    }

    for(let num of str2){
        count2[num] = (count2[num] || 0) + 1
    }

    for(let key in count1){
        if(count1[key] != count2[key]) return false
    }

    return true
}