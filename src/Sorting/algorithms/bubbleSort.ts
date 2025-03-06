import { AnimationArrayType, swap } from './types';

/**
 * Bubble Sort Algorithm
 * Time Complexity: O(n²)
 * 
 * Repeatedly steps through the list, compares adjacent elements, 
 * and swaps them if they are in the wrong order.
 */
export const bubbleSort = (array: number[]): AnimationArrayType[] => {
  const animations: AnimationArrayType[] = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  const sortedIndices: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Add comparing animation
      animations.push({
        array: [...arrayCopy],
        comparing: [j, j + 1],
        swapping: [],
        sorted: [...sortedIndices]
      });

      if (arrayCopy[j] > arrayCopy[j + 1]) {
        // Add swapping animation
        animations.push({
          array: [...arrayCopy],
          comparing: [],
          swapping: [j, j + 1],
          sorted: [...sortedIndices]
        });

        swap(arrayCopy, j, j + 1);
      }
    }
    
    // Mark the last element as sorted
    sortedIndices.push(n - i - 1);
  }

  // Mark the first element as sorted (which is the smallest)
  if (!sortedIndices.includes(0)) {
    sortedIndices.push(0);
  }

  // Add final state
  animations.push({
    array: [...arrayCopy],
    comparing: [],
    swapping: [],
    sorted: [...sortedIndices]
  });

  return animations;
}; 