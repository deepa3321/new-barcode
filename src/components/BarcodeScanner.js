import React, { useState } from 'react';
import BarcodeScanner from 'react-barcode-reader';
import './BarcodeScanner.css'; 

const BarcodeScannerComponent = () => {
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setError(null);
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError('Failed to access the camera. Please make sure you have granted camera permissions.');
  };

  return (
    <div className="ScannerContainer">
      <div className="ScannerWindow">
        <BarcodeScanner
          onError={handleError}
          onScan={handleScan}
          facingMode={'environment'} 
        />
      </div>
      {error ? (
        <p className="ErrorMessage">Error: {error}</p>
      ) : (
        <p className="ResultText">Scanned Data: {result}</p>
      )}
    </div>
  );
};

export default BarcodeScannerComponent;
