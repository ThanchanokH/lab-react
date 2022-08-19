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
        <details className='คำใบ้'>
          <summary>Hint</summary>
            1.คนที่ cover เพลง I Like Me Better และเป็นสมาชิก nct127<br></br>
            2.คนร้องเพลง long flight และเป็นสมาชิก nct127<br></br>
        </details>  
    </div>
    
  );
}

export default App;
