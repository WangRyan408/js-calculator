import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [equation, setEquation] = useState('0');
  const [formula, setFormula] = useState('0');
  const [isPrevOp, setPrevOp] = useState(false);
  const [isPrevNum, setPrevNum] = useState(true);
  const [isPrevDot, setPrevDot] = useState(false);
  const operators = document.getElementsByClassName('op');
  const myRef = useRef(null);
  
  
  function HandleNum(e) {
    setPrevNum(true);
    setPrevOp(false);
    //operators.removeAttribute('disabled');
    if (equation === '0' && e.currentTarget.textContent === '.') {
      setEquation(equation + e.currentTarget.textContent);
     
    }
    else if (equation === '0'){
      setEquation(e.currentTarget.textContent);
     
    }
    else {
      setEquation(equation + e.currentTarget.textContent);
      
    }
    //Console output because im stoopid
    //console.log({"inputState": input});
    //console.log({"Button Pressed": e.currentTarget.textContent});
    //console.log({"isPrevOp": isPrevOp})
    //console.log({"OpRegex": opRegex.test(input)});
    console.log(equation);
    
  }

  function handleClear(e) {
    setEquation('0');
    setFormula('0');
    myRef.current.disabled = false;
  }

  function handleDelete(e) {
    const deleteRegex = /(\d|\.|\s\W\s)$/;
    setEquation(equation.replace(deleteRegex, ''));
    setFormula(equation.replace(deleteRegex, ''));

    if (equation[equation.length - 1] === '.') {
      myRef.current.disabled = false;
    }
  }
 
  function handleOp(e) {

  setEquation(equation + e.currentTarget.textContent);
  setFormula(formula + e.currentTarget.textContent);
  
  myRef.current.disabled = false;
  operators.setAttribute('disabled', '');
  console.log(equation);
  
  }

  function handleDecimal(e) {
      
      setEquation(equation + e.currentTarget.textContent);
      setFormula(formula + e.currentTarget.textContent);
      myRef.current.disabled = true;
    

    console.log(equation);
    
  }


  function handleEqual(e) {
    if (e.currentTarget.textContent === '=') {
      setEquation(Math.round(1000000000000 * eval(equation)) / 1000000000000);
      myRef.current.disabled = false;
     
    }
    console.log(equation);
    
  }

  function disableDec() {
    if (isPrevDot) {
      myRef.current.disabled = true;
    }
    else if (!isPrevDot) {
      myRef.current.disabled = false;
    }
  }

  return (
    <div className="App">
       <div id="display">
            <p className="calc" id="prev" dangerouslySetInnerHTML={{__html: equation}}></p>
        </div>
        <div id="ac">
            <div className="child"><button className="delete" id="clear" onClick={handleClear}>Clear</button></div>
            
            <div className="child"><button className="delete" id="backspace" onClick={handleDelete}>Delete</button></div>
        </div>
        <div id="input">
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>7</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>8</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>9</button></div>
            <div className="operator"><button className="btn op" data-op="" onClick={HandleNum}>&#247;</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>4</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>5</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>6</button></div>
            <div className="operator"><button className="btn op" data-op="" onClick={HandleNum}>&#215;</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>1</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>2</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>3</button></div>
            <div className="operator"><button className="btn" data-op="" onClick={HandleNum}>-</button></div>
            <div className="operator"><button className="btn" id="period" data-op="" ref={myRef} onClick={handleDecimal}>.</button></div>
            <div className="operator"><button className="btn" data-num="" onClick={HandleNum}>0</button></div>
            <div className="operator"><button className="btn op" data-op="" onClick={handleEqual}>=</button></div>
            <div className="operator"><button className="btn op" data-op="" onClick={handleOp}>+</button></div>
        </div>
    </div>
  );
}

export default App;
