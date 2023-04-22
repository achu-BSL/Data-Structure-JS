function findLongestSubstring(str){
    let longest = 0
    let seen = {}
    let start = 0

    for(let idx = 0; idx < str.length; idx++){
        let char = str[idx]

        if(seen[char]){
            start = Math.max(start, seen[char])
        }

        //index - biggning of substring + 1 (to include current in count)
        longest = Math.max(longest, idx - start + 1)
        seen[char] = idx + 1
    }
    return longest
}

const str = "asarudeen"
console.log(findLongestSubstring(str))