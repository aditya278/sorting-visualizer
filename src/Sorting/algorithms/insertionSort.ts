import { AnimationArrayType } from './types';

/**
 * Insertion Sort Algorithm
 * Time Complexity: O(n²)
 * 
 * Builds the sorted array one item at a time by repeatedly taking the next element
 * and inserting it into its correct position in the already sorted part of the array.
 */
export const insertionSort = (array: number[]): AnimationArrayType[] => {
  const animations: AnimationArrayType[] = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  const sortedIndices: number[] = [0]; // First element is already sorted
  
  for (let i = 1; i < n; i++) {
    const key = arrayCopy[i];
    let j = i - 1;
    
    // Add animation for selecting the key
    animations.push({
      array: [...arrayCopy],
      comparing: [i],
      swapping: [],
      sorted: [...sortedIndices]
    });
    
    while (j >= 0 && arrayCopy[j] > key) {
      // Add comparing animation
      animations.push({
        array: [...arrayCopy],
        comparing: [j, j + 1],
        swapping: [],
        sorted: [...sortedIndices]
      });
      
      // Add swapping animation
      animations.push({
        array: [...arrayCopy],
        comparing: [],
        swapping: [j, j + 1],
        sorted: [...sortedIndices]
      });
      
      arrayCopy[j + 1] = arrayCopy[j];
      j--;
    }
    
    // Place the key in its correct position
    arrayCopy[j + 1] = key;
    
    // Add animation for placing the key
    if (j + 1 !== i) {
      animations.push({
        array: [...arrayCopy],
        comparing: [],
        swapping: [j + 1],
        sorted: [...sortedIndices]
      });
    }
    
    // Mark current index as sorted
    sortedIndices.push(i);
  }
  
  // Add final state
  animations.push({
    array: [...arrayCopy],
    comparing: [],
    swapping: [],
    sorted: Array.from({length: arrayCopy.length}, (_, i) => i) // All indices are sorted
  });
  
  return animations;
}; 