import style from './style.module.css';
import { useState } from 'react';

function App() {
  // State to store value from the input field
  const [inputValue, setInputValue] = useState("");
  
  // Input Field handler
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };
  
  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue("podvoh");
  };

  return (
    // <>
    <div className={`${style.component}`}>
      <div className={`${style.task}`}>
        <input type="text" value={inputValue} onChange={handleUserInput} />
        <button onClick={resetInputField}>Reset</button>
      </div>
    </div>
    // </>
  );
}
  
export default App;
  