import React from 'react';
import './index.css'; 
import QuoteGenerator from './Components/QuoteGenerator';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Add this line

const App = () => {
  return (
    <div className="App">
      <QuoteGenerator />
    </div>
  );
};

export default App;
