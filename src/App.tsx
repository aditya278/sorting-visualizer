import React from "react";
import Sorting from "./Sorting/Sorting";

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
      padding: '2rem 0'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem'
      }}>
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            color: '#4338ca',
            marginBottom: '0.75rem'
          }}>
            Sorting Algorithm Visualizer
          </h1>
          <p style={{ 
            color: '#4b5563', 
            maxWidth: '42rem', 
            margin: '0 auto'
          }}>
            A visual representation of how different sorting algorithms work.
            Select an algorithm, adjust the array size and speed, then watch the
            sorting process in action.
          </p>
        </header>
        
        <main>
          <Sorting />
        </main>
        
        <footer style={{ 
          marginTop: '3rem', 
          textAlign: 'center', 
          color: '#6b7280', 
          fontSize: '0.875rem',
          padding: '1rem 0',
          borderTop: '1px solid #e5e7eb'
        }}>
          <p>
            Built with React and TypeScript by <a style={{ color: '#4338ca' }} href="https://github.com/aditya278" target="_blank" rel="noopener noreferrer">Aditya Shukla</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
