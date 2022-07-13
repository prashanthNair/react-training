import logo from './logo.svg';
import './App.css';
import Increment from './components/increment';
import Decrement from './components/decrement';

import{useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function handleClick(value){
    setCounter(value);
    console.log(counter);
  }
debugger;
  return (
    <div className="App">
      Counter : {counter}
      {/* <button onClick={handleClick}>Add</button> */}
      <Increment title="increment" handleCounter= {handleClick} counter={counter}></Increment>
      <Increment title="decrement" handleCounter= {handleClick} counter={counter}></Increment>
      {/* <Decrement handleCounter = {handleClick}></Decrement> */}
    </div>
  );
}

export default App;
