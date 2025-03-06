import React, { useState, useEffect, useRef, useCallback } from "react";
import Controls from "./Controls";
import { 
  bubbleSort, 
  selectionSort, 
  insertionSort, 
  mergeSort, 
  quickSort, 
  heapSort, 
  AnimationArrayType 
} from "./algorithms";

// Helper function to generate random numbers within a range
const randomIntFromIntervals = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Sorting: React.FC = () => {
  // State for the array to be sorted
  const [array, setArray] = useState<number[]>([]);
  
  // State for animation control
  const [animationState, setAnimationState] = useState<AnimationArrayType | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  
  // State for user controls
  const [arraySize, setArraySize] = useState<number>(30);
  const [algorithm, setAlgorithm] = useState<string>("bubble");
  const [speed, setSpeed] = useState<string>("medium");
  
  // Animation frames reference
  const animationFrames = useRef<AnimationArrayType[]>([]);
  const animationTimeoutId = useRef<NodeJS.Timeout | null>(null);
  const currentStep = useRef<number>(0);

  // Generate a new random array
  const resetArray = useCallback(() => {
    if (animationTimeoutId.current) {
      clearTimeout(animationTimeoutId.current);
      animationTimeoutId.current = null;
    }
    
    setIsRunning(false);
    currentStep.current = 0;
    animationFrames.current = [];
    
    const newArray: number[] = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(randomIntFromIntervals(5, 300));
    }
    
    setArray(newArray);
    setAnimationState(null);
    
    console.log("New array generated:", newArray);
  }, [arraySize]);

  // Initialize array on component mount and when array size changes
  useEffect(() => {
    resetArray();
  }, [resetArray]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutId.current) {
        clearTimeout(animationTimeoutId.current);
      }
    };
  }, []);

  // Start the sorting animation
  const startSorting = () => {
    if (array.length === 0 || isRunning) return;
    
    setIsRunning(true);
    currentStep.current = 0;
    
    // Generate animation frames based on selected algorithm
    switch (algorithm) {
      case "bubble":
        animationFrames.current = bubbleSort([...array]);
        break;
      case "selection":
        animationFrames.current = selectionSort([...array]);
        break;
      case "insertion":
        animationFrames.current = insertionSort([...array]);
        break;
      case "merge":
        animationFrames.current = mergeSort([...array]);
        break;
      case "quick":
        animationFrames.current = quickSort([...array]);
        break;
      case "heap":
        animationFrames.current = heapSort([...array]);
        break;
      default:
        animationFrames.current = bubbleSort([...array]);
    }
    
    // Start the animation
    animateStep();
  };

  // Animate each step of the sorting algorithm
  const animateStep = () => {
    if (currentStep.current >= animationFrames.current.length) {
      setIsRunning(false);
      return;
    }
    
    // Set the current animation state
    setAnimationState(animationFrames.current[currentStep.current]);
    
    // Update array state if needed
    if (currentStep.current > 0) {
      setArray(animationFrames.current[currentStep.current].array);
    }
    
    // Increment step counter
    currentStep.current++;
    
    // Set timeout for next step based on speed
    let timeoutDuration = 100; // Medium speed by default
    
    if (speed === "slow") {
      timeoutDuration = 200;
    } else if (speed === "fast") {
      timeoutDuration = 50;
    }
    
    animationTimeoutId.current = setTimeout(animateStep, timeoutDuration);
  };

  // Calculate the width of each bar based on array size
  const barWidth = Math.max(5, Math.min(30, Math.floor(1200 / arraySize) - 2));
  
  // Calculate the maximum height for proper scaling
  const maxValue = Math.max(...array, 1);
  const heightScale = 350 / maxValue;
  
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      <Controls
        arraySize={arraySize}
        setArraySize={setArraySize}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        speed={speed}
        setSpeed={setSpeed}
        isRunning={isRunning}
        onRandomize={resetArray}
        onSort={startSorting}
      />
      
      <div style={{ 
        position: 'relative', 
        height: '400px', 
        backgroundColor: '#111827', 
        borderRadius: '0.5rem', 
        padding: '1rem', 
        display: 'flex', 
        alignItems: 'flex-end', 
        justifyContent: 'center' 
      }}>
        {array.length > 0 ? (
          array.map((value, idx) => {
            // Determine the color of the bar based on its state
            let barColor = '#3b82f6'; // Default blue
            
            if (animationState) {
              if (animationState.comparing.includes(idx)) {
                barColor = '#facc15'; // Yellow for comparing
              } else if (animationState.swapping.includes(idx)) {
                barColor = '#ef4444'; // Red for swapping
              } else if (animationState.sorted.includes(idx)) {
                barColor = '#4ade80'; // Green for sorted
              }
            }
            
            const scaledHeight = Math.max(value * heightScale, 2);
            
            return (
              <div
                key={`${idx}-${value}`}
                style={{
                  width: `${barWidth}px`,
                  height: `${scaledHeight}px`,
                  backgroundColor: barColor,
                  borderTopLeftRadius: '0.25rem',
                  borderTopRightRadius: '0.25rem',
                  marginLeft: '1px',
                  marginRight: '1px',
                  transition: 'height 0.3s ease'
                }}
              >
                {arraySize <= 20 && (
                  <div style={{ 
                    color: 'white', 
                    fontSize: '0.75rem', 
                    textAlign: 'center', 
                    overflow: 'hidden' 
                  }}>
                    {value}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div style={{ color: 'white' }}>No data to display. Please randomize the array.</div>
        )}
      </div>
      
      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        backgroundColor: '#f9fafb', 
        borderRadius: '0.5rem', 
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>Color Legend</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '1.25rem', height: '1.25rem', backgroundColor: '#3b82f6', borderRadius: '0.25rem', marginRight: '0.5rem' }}></div>
            <span style={{ color: '#374151' }}>Unsorted</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '1.25rem', height: '1.25rem', backgroundColor: '#facc15', borderRadius: '0.25rem', marginRight: '0.5rem' }}></div>
            <span style={{ color: '#374151' }}>Comparing</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '1.25rem', height: '1.25rem', backgroundColor: '#ef4444', borderRadius: '0.25rem', marginRight: '0.5rem' }}></div>
            <span style={{ color: '#374151' }}>Swapping</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '1.25rem', height: '1.25rem', backgroundColor: '#4ade80', borderRadius: '0.25rem', marginRight: '0.5rem' }}></div>
            <span style={{ color: '#374151' }}>Sorted</span>
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        backgroundColor: '#f9fafb', 
        borderRadius: '0.5rem', 
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>Algorithm Information</h3>
        <div style={{ color: '#374151' }}>
          {algorithm === "bubble" && (
            <div>
              <p style={{ fontWeight: '500' }}>Bubble Sort</p>
              <p>Time Complexity: O(n²)</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</p>
            </div>
          )}
          {algorithm === "selection" && (
            <div>
              <p style={{ fontWeight: '500' }}>Selection Sort</p>
              <p>Time Complexity: O(n²)</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Divides the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly selects the smallest element from the unsorted sublist and moves it to the end of the sorted sublist.</p>
            </div>
          )}
          {algorithm === "insertion" && (
            <div>
              <p style={{ fontWeight: '500' }}>Insertion Sort</p>
              <p>Time Complexity: O(n²)</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Builds the sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position in the already sorted part of the array.</p>
            </div>
          )}
          {algorithm === "merge" && (
            <div>
              <p style={{ fontWeight: '500' }}>Merge Sort</p>
              <p>Time Complexity: O(n log n)</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Divides the array into halves, sorts them recursively, and then merges the sorted halves.</p>
            </div>
          )}
          {algorithm === "quick" && (
            <div>
              <p style={{ fontWeight: '500' }}>Quick Sort</p>
              <p>Time Complexity: Average O(n log n), Worst O(n²)</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Selects a 'pivot' element and partitions the array around the pivot, with elements less than the pivot on the left and greater on the right. It then recursively sorts the sub-arrays.</p>
            </div>
          )}
          {algorithm === "heap" && (
            <div>
              <p style={{ fontWeight: '500' }}>Heap Sort</p>
              <p>Time Complexity: O(n log n)</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Builds a max heap from the array and repeatedly extracts the maximum element from the heap, placing it at the end of the array.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
