import React from 'react';
import './App.css';
import BarcodeScanner from './components/BarcodeScanner'; 

function App() {
  return (
    <div className="App">
      <h1>Barcode Scanner PWA</h1>
      <BarcodeScanner /> 
    </div>
  );
}

export default App;
