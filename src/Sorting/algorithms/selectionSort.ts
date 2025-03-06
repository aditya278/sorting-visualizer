import { AnimationArrayType, swap } from './types';

/**
 * Selection Sort Algorithm
 * Time Complexity: O(n²)
 * 
 * Divides the input list into two parts: a sorted sublist and an unsorted sublist.
 * It repeatedly selects the smallest element from the unsorted sublist and 
 * moves it to the end of the sorted sublist.
 */
export const selectionSort = (array: number[]): AnimationArrayType[] => {
  const animations: AnimationArrayType[] = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  const sortedIndices: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      // Add comparing animation
      animations.push({
        array: [...arrayCopy],
        comparing: [minIdx, j],
        swapping: [],
        sorted: [...sortedIndices]
      });

      if (arrayCopy[j] < arrayCopy[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      // Add swapping animation
      animations.push({
        array: [...arrayCopy],
        comparing: [],
        swapping: [i, minIdx],
        sorted: [...sortedIndices]
      });

      swap(arrayCopy, i, minIdx);
    }

    // Mark current index as sorted
    sortedIndices.push(i);
  }

  // Mark the last element as sorted
  sortedIndices.push(n - 1);

  // Add final state
  animations.push({
    array: [...arrayCopy],
    comparing: [],
    swapping: [],
    sorted: [...sortedIndices]
  });

  return animations;
}; 