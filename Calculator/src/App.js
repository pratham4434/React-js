import React, {useState} from 'react';
import './App.css'

const App = () => {
  const [result,setResult] =useState('');
  return (
    <div className='container'>
      <form>
        <input type={'text'} value={result} />
      </form>
    </div>
  )
};

export default App;
