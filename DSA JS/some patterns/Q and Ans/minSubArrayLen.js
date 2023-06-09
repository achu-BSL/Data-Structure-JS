function minSubArrayLen(nums, sum){
    let total = 0
    let start = 0
    let end = 0

    let minLen = Infinity
    
    while(start < nums.length){
    //if current window doesn't add up to the given sum
                 //move the window right
        if(total < sum && end < nums.length){ 
            total += nums[end]
            end++
        }
    //if current window adds up to atleast the sum given then
                 //we can shrink the window
        else if(total >= sum){
            minLen = Math.min(minLen, end - start)
            total -= nums[start]
            start++
        }         
    //current total less than required total but we reach the end, need
    //this or else we'll be in an infinity loop
    
        else {
            console.log("break")
            break
        }    

    }

    return minLen === Infinity ? 0 : minLen

}



console.log(minSubArrayLen([2,3,6,3,5,7,2,4,7,8], 118))