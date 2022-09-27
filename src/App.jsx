import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './App.css';

function App() {

  const [equation, setEquation] = useState('');
  const [input, setInput] = useState('0');
  const [prevValue, setPrevValue] = useState('');

  function handleNum(e) {
    if (input !== '0') {
    setInput(input + e.currentTarget.textContent);
    setEquation(equation + e.currentTarget.textContent);
    } else {
      setInput(e.currentTarget.textContent);
      setEquation(e.currentTarget.textContent);
    }
    //console.log(input);
    //console.log(equation);
  }

  function handleClear(e) {
    setInput('0');
    setEquation('');
  }

  function handleDelete(e) {
    const deleteRegex = /(\d|\.|\s\W\s)$/;
    setInput(input.replace(deleteRegex, ''));
  }
 
  function handleOp(e) {
    const deleteOp = /^(\d|\.|\s\W\s)/;
    const firstNum = /^(\d\.?(\d+)?)/g;
    const inputRegex = /\S/g;

    const op = ['÷', '×', '+', '-', '='];
    const operators = {
      '÷': '/',
      '×': '*',
  }

  if (prevValue === '') {
    setEquation(equation + e.currentTarget.textContent);
    setPrevValue(e.currentTarget.textContent);
  } else {
    return;
  }
    //setEquation(equation + deleteOp);
    

  }

  return (
    <div className="App">
       <div id="display">
            <p className="calc" id="prev" dangerouslySetInnerHTML={{__html: equation}}></p>
            <p className="calc" id="current" dangerouslySetInnerHTML={{__html: input}}></p>
        </div>
        <div id="ac">
            <div className="child"><button className="delete" id="clear" onClick={handleClear}>Clear</button></div>
            
            <div className="child"><button className="delete" id="backspace" onClick={handleDelete}>Delete</button></div>
        </div>
        <div id="input">
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>7</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>8</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>9</button></div>
            <div className="operator"><button className="btn" data-op="" onClick={handleNum}> &#247; </button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>4</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>5</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>6</button></div>
            <div className="operator"><button className="btn" data-op="" onClick={handleNum}> &#215; </button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>1</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>2</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>3</button></div>
            <div className="operator"><button className="btn" data-op="" onClick={handleNum}> - </button></div>
            <div className="operator"><button className="btn" id="period" data-op="" disabled="" onClick={handleNum}>.</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={handleNum}>0</button></div>
            <div className="operator"><button className="btn" data-op="" onClick={handleNum}> = </button></div>
            <div className="operator"><button className="btn" data-op="" onClick={handleNum}> + </button></div>
        </div>
    </div>
  );
}

export default App;
