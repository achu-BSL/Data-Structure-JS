

const ARR = [1, 2, 3, 5, 6, 7, 7, 8, 12, 13, 15 ,16];

const binerySearch = (arr: number[], target: number, sIdx = 0, eIdx = arr.length - 1): number => {
    if(sIdx > eIdx) return -1;
    const mIdx = Math.floor((sIdx + eIdx) / 2);
    if(arr[mIdx] === target) return mIdx;
    if(arr[mIdx] < target) return binerySearch(arr, target, mIdx + 1, eIdx)
    else return binerySearch(arr, target, sIdx, mIdx - 1);
}

console.log(binerySearch(ARR, 14));