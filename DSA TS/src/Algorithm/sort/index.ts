// import { bubbleSort } from "./BubbleSort";
// import { selectionSort } from "./SelectionSort";
// import { insertionSort } from "./InsertionSort";
// import { mergeSort } from "./MergeSort";
import { quickSort } from "./QuickSort";

const Arr = [1, 2, 63,2, 62, 3, 25, 23, 12, 14, 23, 24];

// bubbleSort(Arr);
// selectionSort(Arr);
// insertionSort(Arr);
const sortedArr = quickSort(Arr);
console.log(sortedArr);

console.log("From sort index");
console.log(Arr);