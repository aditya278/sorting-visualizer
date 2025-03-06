import { AnimationArrayType } from './types';

/**
 * Merge Sort Algorithm
 * Time Complexity: O(n log n)
 * 
 * Divides the array into halves, sorts them recursively, 
 * and then merges the sorted halves.
 */
export const mergeSort = (array: number[]): AnimationArrayType[] => {
  const animations: AnimationArrayType[] = [];
  const arrayCopy = [...array];
  const sortedIndices: number[] = [];
  
  // Helper function to merge two sorted subarrays
  const merge = (arr: number[], start: number, mid: number, end: number) => {
    const leftSize = mid - start + 1;
    const rightSize = end - mid;
    
    // Create temporary arrays
    const leftArray = new Array(leftSize);
    const rightArray = new Array(rightSize);
    
    // Copy data to temporary arrays
    for (let i = 0; i < leftSize; i++) {
      leftArray[i] = arr[start + i];
    }
    for (let j = 0; j < rightSize; j++) {
      rightArray[j] = arr[mid + 1 + j];
    }
    
    // Merge the temporary arrays back into arr
    let i = 0; // Initial index of left subarray
    let j = 0; // Initial index of right subarray
    let k = start; // Initial index of merged subarray
    
    while (i < leftSize && j < rightSize) {
      // Add comparing animation
      animations.push({
        array: [...arr],
        comparing: [start + i, mid + 1 + j],
        swapping: [],
        sorted: [...sortedIndices]
      });
      
      if (leftArray[i] <= rightArray[j]) {
        // Add overwriting animation
        animations.push({
          array: [...arr],
          comparing: [],
          swapping: [k],
          sorted: [...sortedIndices]
        });
        
        arr[k] = leftArray[i];
        i++;
      } else {
        // Add overwriting animation
        animations.push({
          array: [...arr],
          comparing: [],
          swapping: [k],
          sorted: [...sortedIndices]
        });
        
        arr[k] = rightArray[j];
        j++;
      }
      k++;
    }
    
    // Copy the remaining elements of leftArray, if any
    while (i < leftSize) {
      // Add overwriting animation
      animations.push({
        array: [...arr],
        comparing: [],
        swapping: [k],
        sorted: [...sortedIndices]
      });
      
      arr[k] = leftArray[i];
      i++;
      k++;
    }
    
    // Copy the remaining elements of rightArray, if any
    while (j < rightSize) {
      // Add overwriting animation
      animations.push({
        array: [...arr],
        comparing: [],
        swapping: [k],
        sorted: [...sortedIndices]
      });
      
      arr[k] = rightArray[j];
      j++;
      k++;
    }
    
    // Mark the range as sorted
    for (let idx = start; idx <= end; idx++) {
      if (!sortedIndices.includes(idx)) {
        sortedIndices.push(idx);
      }
    }
  };
  
  // Helper function to recursively sort
  const mergeSortHelper = (arr: number[], start: number, end: number) => {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      
      // Sort first and second halves
      mergeSortHelper(arr, start, mid);
      mergeSortHelper(arr, mid + 1, end);
      
      // Merge the sorted halves
      merge(arr, start, mid, end);
    }
  };
  
  // Start the merge sort
  mergeSortHelper(arrayCopy, 0, arrayCopy.length - 1);
  
  // Add final state
  animations.push({
    array: [...arrayCopy],
    comparing: [],
    swapping: [],
    sorted: Array.from({length: arrayCopy.length}, (_, i) => i) // All indices are sorted
  });
  
  return animations;
}; 