const swap = (arr: number[], idx1: number, idx2: number) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

/**
 * @param dataArray
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element from unsorted part,
 * and putting it at the beginning of the array.
 */
const selectionSort = (dataArray: number[]) => {
  let i, j, minIdx;
  for(i=0; i<dataArray.length - 1; i++) {
    minIdx = i;
    for(j=i+1; j<dataArray.length; j++) {
        if(dataArray[j] <= dataArray[minIdx]) {
            minIdx = j;
        }
    }
    swap(dataArray, i, minIdx);
  }
  return dataArray;
};

const bubbleSort = (array: number[]) => {};

export { selectionSort, bubbleSort };
