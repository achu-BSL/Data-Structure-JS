const pivote = (arr: number[], start: number, end: number) => {
    const pivote = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++) {
        if(arr[i] < pivote) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }

    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

    return swapIdx;
}

export const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
    if(left < right) {
        const pivoteIdx = pivote(arr, left, right);
        quickSort(arr, left, pivoteIdx - 1);
        quickSort(arr, pivoteIdx + 1, right);
    }
    return arr;
}