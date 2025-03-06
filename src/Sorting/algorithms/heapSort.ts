import { AnimationArrayType, swap } from './types';

/**
 * Heap Sort Algorithm
 * Time Complexity: O(n log n)
 * 
 * Builds a max heap from the array and repeatedly extracts 
 * the maximum element from the heap, placing it at the end of the array.
 */
export const heapSort = (array: number[]): AnimationArrayType[] => {
  const animations: AnimationArrayType[] = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  const sortedIndices: number[] = [];
  
  // Helper function to heapify a subtree rooted with node i
  const heapify = (arr: number[], n: number, i: number) => {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child
    
    // If left child is larger than root
    if (left < n) {
      // Add comparing animation
      animations.push({
        array: [...arr],
        comparing: [largest, left],
        swapping: [],
        sorted: [...sortedIndices]
      });
      
      if (arr[left] > arr[largest]) {
        largest = left;
      }
    }
    
    // If right child is larger than largest so far
    if (right < n) {
      // Add comparing animation
      animations.push({
        array: [...arr],
        comparing: [largest, right],
        swapping: [],
        sorted: [...sortedIndices]
      });
      
      if (arr[right] > arr[largest]) {
        largest = right;
      }
    }
    
    // If largest is not root
    if (largest !== i) {
      // Add swapping animation
      animations.push({
        array: [...arr],
        comparing: [],
        swapping: [i, largest],
        sorted: [...sortedIndices]
      });
      
      swap(arr, i, largest);
      
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  };
  
  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arrayCopy, n, i);
  }
  
  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Add swapping animation
    animations.push({
      array: [...arrayCopy],
      comparing: [],
      swapping: [0, i],
      sorted: [...sortedIndices]
    });
    
    // Move current root to end
    swap(arrayCopy, 0, i);
    
    // Mark current index as sorted
    sortedIndices.push(i);
    
    // Call max heapify on the reduced heap
    heapify(arrayCopy, i, 0);
  }
  
  // Mark the first element as sorted
  if (!sortedIndices.includes(0)) {
    sortedIndices.push(0);
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