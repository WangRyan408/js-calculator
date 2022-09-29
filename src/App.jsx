import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [equation, setEquation] = useState('');
  const [input, setInput] = useState('0');
  const [isPrevOp, setPrevOp] = useState(false);

  
  function HandleNum(e) {
    //console.log(e.currentTarget.textContent);
    const numReq = /^[0-9]\./;
    const opRegex = /[\÷\×\+\-]/;

    if (input === '0' && e.currentTarget.textContent === '0') {

      setInput(input);
      setEquation(equation);
    }
    else if (input !== '0') {
      setInput(input + e.currentTarget.textContent);
      setEquation(equation + e.currentTarget.textContent);
    }
    else if (e.currentTarget.textContent === '.' && input === '0') {
      setInput(input + e.currentTarget.textContent);
      setEquation('0.');
    }
    else if (e.currentTarget.textContent.includes('.')) {
      setInput(input + e.currentTarget.textContent);
      setEquation(equation + e.currentTarget.textContent);
    }

    else if (input === '0') {
      setInput(e.currentTarget.textContent);
      setEquation(e.currentTarget.textContent);
      
    } else if (opRegex.test(input)) {
        setInput(e.currentTarget.textContent);
        setEquation(equation + e.currentTarget.textContent);
    }
    
    else {
        setInput(input + e.currentTarget.textContent);
        setEquation(equation + e.currentTarget.textContent);
    }

    setPrevOp(false);
    //Console output because im stoopid
    //console.log({"inputState": input});
    //console.log({"Button Pressed": e.currentTarget.textContent});
    //console.log({"isPrevOp": isPrevOp})
    console.log({"OpRegex": opRegex.test(input)});
  }

  function handleClear(e) {
    setInput('0');
    setEquation('');
  }

  function handleDelete(e) {
    const deleteRegex = /(\d|\.|\s\W\s)$/;
    setInput(input.replace(deleteRegex, ''));
    setEquation(equation.replace(deleteRegex, ''));
  }
 
  function handleOp(e) {
    const deleteOp = /^(\d|\.|\s\W\s)/;
    const firstNum = /^(\d\.?(\d+)?)/g;
    const inputRegex = /\S/g;
    const opRegex = /[\÷\×\+\-]/;
    const op = ['÷', '×', '+', '-', '='];
    const operators = {
      '÷': '/',
      '×': '*',
  }
    if (!isPrevOp) {
      setInput(e.currentTarget.textContent);
      setEquation(equation + e.currentTarget.textContent);
      setPrevOp(true);
    }
    
    //console.log({"inputState": input});
    //console.log({"Button Pressed": e.currentTarget.textContent});
    //console.log({"isPrevOp": isPrevOp})
    console.log({"OpRegex": opRegex.test(input)});
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
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>7</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>8</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>9</button></div>
            <div className="operator"><button className="btn op" data-op="" onClick={HandleNum}> &#247; </button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>4</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>5</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>6</button></div>
            <div className="operator"><button className="btn op" data-op="" onClick={HandleNum}> &#215; </button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>1</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>2</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>3</button></div>
            <div className="operator"><button className="btn" data-op="" onClick={HandleNum}> - </button></div>
            <div className="operator"><button className="btn" id="period" data-op="" disabled="" onClick={HandleNum}>.</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>0</button></div>
            <div className="operator"><button className="btn op" data-op="" onClick={HandleNum}> = </button></div>
            <div className="operator"><button className="btn op" data-op="" onClick={handleOp}> + </button></div>
        </div>
    </div>
  );
}

export default App;
