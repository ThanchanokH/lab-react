import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Jaehyun";
function App() {
    function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
        <button onClick={refreshPage}>Click to reload!</button>
        <WordCard value="Jaehyun"/>
    </div>
    
  );
}

export default App;
