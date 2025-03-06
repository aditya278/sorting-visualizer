import React from 'react';

interface ControlsProps {
  arraySize: number;
  setArraySize: (size: number) => void;
  algorithm: string;
  setAlgorithm: (algo: string) => void;
  speed: string;
  setSpeed: (speed: string) => void;
  isRunning: boolean;
  onRandomize: () => void;
  onSort: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  arraySize,
  setArraySize,
  algorithm,
  setAlgorithm,
  speed,
  setSpeed,
  isRunning,
  onRandomize,
  onSort
}) => {
  return (
    <div className="mb-6 border border-gray-300 rounded-lg overflow-hidden">
      <div style={{ backgroundColor: '#4338ca' }} className="p-4">
        <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>Sorting Controls</h2>
      </div>
      
      <div style={{ backgroundColor: 'white', padding: '1.25rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="array-size" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
            <span>Array Size</span>
            <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{arraySize}</span>
          </label>
          <input
            id="array-size"
            type="range"
            min="5"
            max="100"
            value={arraySize}
            onChange={(e) => setArraySize(parseInt(e.target.value))}
            disabled={isRunning}
            style={{ width: '100%', height: '0.5rem', backgroundColor: '#e5e7eb', borderRadius: '0.375rem', cursor: 'pointer' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="algorithm" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
            Algorithm
          </label>
          <select
            id="algorithm"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            disabled={isRunning}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', backgroundColor: 'white' }}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="heap">Heap Sort</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="speed" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
            Speed
          </label>
          <select
            id="speed"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            disabled={isRunning}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', backgroundColor: 'white' }}
          >
            <option value="slow">Slow</option>
            <option value="medium">Medium</option>
            <option value="fast">Fast</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
          <button
            onClick={onRandomize}
            disabled={isRunning}
            style={{ 
              padding: '0.75rem 1rem', 
              backgroundColor: '#f3f4f6', 
              color: '#1f2937', 
              fontWeight: '500', 
              borderRadius: '0.375rem', 
              border: '1px solid #d1d5db',
              cursor: isRunning ? 'not-allowed' : 'pointer',
              opacity: isRunning ? '0.5' : '1'
            }}
          >
            Randomize
          </button>
          <button
            onClick={onSort}
            disabled={isRunning}
            style={{ 
              padding: '0.75rem 1rem', 
              background: 'linear-gradient(to right, #2563eb, #4338ca)', 
              color: 'white', 
              fontWeight: '500', 
              borderRadius: '0.375rem',
              border: 'none',
              cursor: isRunning ? 'not-allowed' : 'pointer',
              opacity: isRunning ? '0.5' : '1'
            }}
          >
            {isRunning ? 'Sorting...' : 'Sort'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls; 