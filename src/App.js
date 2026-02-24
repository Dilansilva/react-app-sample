import React, { useState, useMemo ,useRef,useEffect} from "react";

function App() {
const [number, setNumber] = useState(0);
const [toggle, setToggle] = useState(false);
const doubleNumber = useMemo(() => {
  return slowFunction(number)
},[number])

function slowFunction(number) {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return number * 2;
}

 const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    // This runs on every render, but we store in ref
    renderCount.current = renderCount.current + 1;
  });

   const inputRef = useRef(null);

  function focusInput() {
    // Access DOM element directly
    inputRef.current.focus();
  }



  return (
    <div>
      <input type="number" onChange={(e) => {setNumber(e.target.value)}}/>
      <button onClick={() => setToggle((prevState) => !prevState)}>toggle</button>
      <div style={{backgroundColor:toggle ? "red" : "pink"}}>{doubleNumber}</div>

        <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <p>Component rendered {renderCount.current} times</p>

       <div>
        <input ref={inputRef} type="text" placeholder="Type here..." />
        <br/>
        <h1>asdasdasd</h1>
        <button onClick={focusInput}>Focus the Input</button>
      </div>
    </div>
  );
}

export default App;
