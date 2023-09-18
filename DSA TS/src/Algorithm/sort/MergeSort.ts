

const merge = (arr_one: number[], arr_two: number[]) => {
    let [i, j] = [0, 0];
    const res = [] as number[];
    while(i < arr_one.length && j < arr_two.length) {
        if(arr_one[i] <= arr_two[j]) {
            res.push(arr_one[i]);
            i++;
        } else {
            res.push(arr_two[j]);
            j++;
        }
    }

    while(i < arr_one.length) {
        res.push(arr_one[i]);
        i++
    }

    while(j < arr_two.length) {
        res.push(arr_two[j]);
        j++;
    }

    return res;
}

export const mergeSort = (arr: number[] ) => {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left: number[] = mergeSort(arr.slice(0, mid));
    const right: number[] = mergeSort(arr.slice(mid));

    return merge(left, right);
}