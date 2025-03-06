# Sorting Algorithm Visualizer

A visual representation of how different sorting algorithms work, built with React and TypeScript.

![Sorting Algorithm Visualizer](https://via.placeholder.com/800x400?text=Sorting+Algorithm+Visualizer)

## Features

- **Interactive Visualization**: Watch sorting algorithms in action with animated bars
- **Multiple Algorithms**: Includes six different sorting algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
- **Customizable**: Adjust array size and sorting speed
- **Color-Coded**: Different colors indicate the current state of each element (comparing, swapping, sorted)
- **Responsive Design**: Works on desktop and mobile devices
- **Algorithm Information**: Displays time complexity and description for each algorithm

## Sorting Algorithms

### Bubble Sort
- **Time Complexity**: O(n²)
- **Description**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

### Selection Sort
- **Time Complexity**: O(n²)
- **Description**: Divides the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly selects the smallest element from the unsorted sublist and moves it to the end of the sorted sublist.

### Insertion Sort
- **Time Complexity**: O(n²)
- **Description**: Builds the sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position in the already sorted part of the array.

### Merge Sort
- **Time Complexity**: O(n log n)
- **Description**: Divides the array into halves, sorts them recursively, and then merges the sorted halves.

### Quick Sort
- **Time Complexity**: Average O(n log n), Worst O(n²)
- **Description**: Selects a 'pivot' element and partitions the array around the pivot, with elements less than the pivot on the left and greater on the right. It then recursively sorts the sub-arrays.

### Heap Sort
- **Time Complexity**: O(n log n)
- **Description**: Builds a max heap from the array and repeatedly extracts the maximum element from the heap, placing it at the end of the array.

## Technologies Used

- **React.js**: Frontend library for building user interfaces
- **TypeScript**: Adds static typing to JavaScript
- **CSS-in-JS**: Inline styles for component styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sorting-visualizer.git
cd sorting-visualizer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Use the slider to adjust the number of elements in the array (5-100)
2. Select a sorting algorithm from the dropdown menu:
   - Bubble Sort
   - Selection Sort
   - Insertion Sort
   - Merge Sort
   - Quick Sort
   - Heap Sort
3. Choose a sorting speed (slow, medium, fast)
4. Click "Randomize" to generate a new random array
5. Click "Sort" to start the sorting visualization

## Color Legend

- **Blue**: Unsorted elements
- **Yellow**: Elements being compared
- **Red**: Elements being swapped
- **Green**: Sorted elements

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by various sorting visualizers across the web
- Built as a learning project to understand sorting algorithms and React
