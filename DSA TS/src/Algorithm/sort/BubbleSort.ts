export const bubbleSort = (arr: number[]) => {
    const leng = arr.length - 1;
    for(let i = leng; i > 0; i--) {
        let isSwaped = false;
        for(let idx = 0; idx < i; idx++) {
            if(arr[idx] > arr[idx + 1]) {
                isSwaped = true;
                [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
            }
        }

        if(!isSwaped) break;
    }
}

