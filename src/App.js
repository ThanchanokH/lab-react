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
        <center><button className='button' onClick={refreshPage}>Click to reload!</button></center>
        <center><WordCard value="Jaehyun"/></center>
        <center><WordCard value="Taeyong"/></center>
    </div>
    
  );
}

export default App;
