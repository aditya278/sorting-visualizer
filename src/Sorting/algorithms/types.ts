// Types for animation steps
export type AnimationArrayType = {
  array: number[];
  comparing: number[];
  swapping: number[];
  sorted: number[];
};

// Helper function to swap elements in an array
export const swap = (arr: number[], idx1: number, idx2: number) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}; 