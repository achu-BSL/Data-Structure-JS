export const selectionSort = (arr: number[]) => {
    const leng = arr.length;
    for(let i = 0; i < leng; i++) {
        let swapIdx = i;
        for(let idx = i + 1; idx < leng; idx++) {
            if(arr[idx] < arr[swapIdx]) swapIdx = idx;
        }
        if(swapIdx !== i) {
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }
}