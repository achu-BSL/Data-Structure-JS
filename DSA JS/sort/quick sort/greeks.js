function quickSort(arr){
    if(arr.length < 1)return arr

    let pivot = arr[0]
    let left = []
    let right = []

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}

const arr = [4, 5, 12, 5, 6, 23, 3, 6, 3]
const quick = quickSort(arr)
console.log(quick)


function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		var pivot = array[0];
		var left = [];
		var right = [];
		for (var i = 1; i < array.length; i++) {
			if (array[i] < pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return quicksort(left).concat(pivot, quicksort(right));
	}
}
var array = [4, 5, 12, 5, 6, 23, 3, 6, 3];
var sortedArray = quicksort(array);
console.log(sortedArray);
