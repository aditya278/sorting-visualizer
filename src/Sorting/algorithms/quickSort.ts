import { AnimationArrayType, swap } from './types';

/**
 * Quick Sort Algorithm
 * Time Complexity: Average O(n log n), Worst O(n²)
 * 
 * Selects a 'pivot' element and partitions the array around the pivot,
 * with elements less than the pivot on the left and greater on the right.
 * It then recursively sorts the sub-arrays.
 */
export const quickSort = (array: number[]): AnimationArrayType[] => {
  const animations: AnimationArrayType[] = [];
  const arrayCopy = [...array];
  const sortedIndices: number[] = [];

  // Helper function to partition the array
  const partition = (arr: number[], low: number, high: number): number => {
    // Choose the rightmost element as pivot
    const pivot = arr[high];
    
    // Add animation for pivot selection
    animations.push({
      array: [...arr],
      comparing: [high],
      swapping: [],
      sorted: [...sortedIndices]
    });
    
    // Index of smaller element
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      // Add comparing animation
      animations.push({
        array: [...arr],
        comparing: [j, high], // Compare current element with pivot
        swapping: [],
        sorted: [...sortedIndices]
      });
      
      // If current element is smaller than the pivot
      if (arr[j] < pivot) {
        i++;
        
        // Add swapping animation
        animations.push({
          array: [...arr],
          comparing: [],
          swapping: [i, j],
          sorted: [...sortedIndices]
        });
        
        swap(arr, i, j);
      }
    }
    
    // Swap the pivot element with the element at (i + 1)
    animations.push({
      array: [...arr],
      comparing: [],
      swapping: [i + 1, high],
      sorted: [...sortedIndices]
    });
    
    swap(arr, i + 1, high);
    
    // Mark pivot as sorted
    if (!sortedIndices.includes(i + 1)) {
      sortedIndices.push(i + 1);
    }
    
    return i + 1;
  };
  
  // Helper function to implement QuickSort
  const quickSortHelper = (arr: number[], low: number, high: number) => {
    if (low < high) {
      // Find pivot element such that
      // element smaller than pivot are on the left
      // element greater than pivot are on the right
      const pi = partition(arr, low, high);
      
      // Recursively sort elements before and after partition
      quickSortHelper(arr, low, pi - 1);
      quickSortHelper(arr, pi + 1, high);
    } else if (low === high && !sortedIndices.includes(low)) {
      // Mark single elements as sorted
      sortedIndices.push(low);
    }
  };
  
  // Start the quick sort
  quickSortHelper(arrayCopy, 0, arrayCopy.length - 1);
  
  // Add final state
  animations.push({
    array: [...arrayCopy],
    comparing: [],
    swapping: [],
    sorted: Array.from({length: arrayCopy.length}, (_, i) => i) // All indices are sorted
  });
  
  return animations;
}; 