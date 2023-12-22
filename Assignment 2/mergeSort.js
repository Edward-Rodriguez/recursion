export default function mergeSort(arrayToSort) {
  const length = arrayToSort.length;
  if (length < 2) return arrayToSort;
  const mid = Math.floor(length / 2);
  let leftArray = arrayToSort.slice(0, mid);
  let rightArray = arrayToSort.slice(mid);
  const sortedArray = [];

  if (leftArray.length >= 1) {
    leftArray = mergeSort(leftArray);
    if (rightArray.length >= 1) {
      rightArray = mergeSort(rightArray);
    }
  }

  let i = 0;
  let j = 0;
  while (sortedArray.length <= length) {
    if (i >= leftArray.length) {
      return sortedArray.concat(rightArray.slice(j));
    } else if (j >= rightArray.length) {
      return sortedArray.concat(leftArray.slice(i));
    } else if (leftArray[i] < rightArray[j]) {
      sortedArray.push(leftArray[i++]);
    } else {
      sortedArray.push(rightArray[j++]);
    }
  }
  return sortedArray;
}
