import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  useEffect (() => {
    document.title = `click ${count}`;
  });

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}> Click Me {count} </button>
        <input type="text" onChange={(e) => setName(e.target.value)}>  </input>
        <p>{name}</p>
      </div> 
    </>
   ); 
};


export default App
