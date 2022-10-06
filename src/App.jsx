import React from 'react';
import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [equation, setEquation] = useState('0');
  
  const operators = document.querySelectorAll('.op');
  const myRef = useRef(null);
  
  
  function HandleNum(e) {
    
    if (operators.length > 0) {
      operators.forEach((x) => {
        if (x.getAttribute('disabled') !== null) {
          x.removeAttribute('disabled');
        }
      })
    }
    
    if (equation === '0' && e.currentTarget.textContent === '.') {
      setEquation(equation + e.currentTarget.textContent);
     
    }
    else if (equation === '0'){
      setEquation(e.currentTarget.textContent);
     
    }
    else {
      setEquation(equation + e.currentTarget.textContent);
      
    }
    console.log(equation);
  }

  function handleClear(e) {
    setEquation('0');
    myRef.current.disabled = false;
  }

  function handleDelete(e) {
    const deleteRegex = /(\d|\.|\s\W\s)$/;
    setEquation(equation.replace(deleteRegex, ''));
    
    if (equation[equation.length - 1] === '.') {
      myRef.current.disabled = false;
    }
  }
 
  function handleOp(e) {

  const operator = {
      '÷': '/',
      '×': '*',
  }

  if (e.currentTarget.textContent === '÷' || e.currentTarget.textContent === '×'){
    switch(e.currentTarget.textContent) {
      case '÷':
        setEquation(equation + operator['÷']);
        break;
      case '×':
        setEquation(equation + operator['×']);
        break;
      default:
    }
    
  } else {
    setEquation(equation + e.currentTarget.textContent);
  }

  myRef.current.disabled = false;
  
  //Disables all operators
  
  if (operators.length > 0) {
    operators.forEach((x) => {
      x.setAttribute('disabled', '');
    })
  }

  console.log(equation);
  
  }

  function handleDecimal(e) {
      
      setEquation(equation + e.currentTarget.textContent);
      
      myRef.current.disabled = true;
  
  }


  function handleEqual(e) {
    const divideZero = /\d+\/0/;
    const multiOp = /[\*+-][\*+-]+/;
    let temp = equation;
    if (equation.match(multiOp) !== null){
      var arr = temp.match(multiOp);
      var lastOp = arr[0][arr[0].length - 1];
    }

    if (e.currentTarget.textContent === '=') {
      if (divideZero.test(equation)) {
        setEquation('You can\'t divide by zero silly');
      } 
      else if (equation.match(multiOp) !== null && lastOp !== '-'){
        //arr = temp.match(multiOp);
        //lastOp = arr[0][arr[0].length - 1];
        temp = temp.replace(multiOp, lastOp);
        //console.log({'temp': temp});
        console.log({'# of Ops': equation.match(multiOp).length});
        console.log({'Parsed equation': temp});
        console.log({'Last Operator': lastOp});
        setEquation(Math.round(1000000000000 * eval(temp)) / 1000000000000);
      } 
      else {
        setEquation(Math.round(1000000000000 * eval(equation)) / 1000000000000);
        myRef.current.disabled = false;
      }
      
      
    }
  
  }

  return (
    <div className="App">
       <div id="screen">
            <p className="calc" id="display" dangerouslySetInnerHTML={{__html: equation}}></p>
        </div>
        <div id="ac">
            <div className="child"><button className="delete" id="clear" onClick={handleClear}>Clear</button></div>
            
            <div className="child"><button className="delete" id="backspace" onClick={handleDelete}>Delete</button></div>
        </div>
        <div id="input">
            <div className="operator"><button className="btn" id="seven" data-num="" onClick={HandleNum}>7</button></div>
            <div className="operator"><button className="btn" id="eight" data-num="" onClick={HandleNum}>8</button></div>
            <div className="operator"><button className="btn" id="nine" data-num="" onClick={HandleNum}>9</button></div>
            <div className="operator"><button className="btn " id="divide" data-op="" onClick={handleOp}>&#247;</button></div>
            <div className="operator"><button className="btn" id="four" data-num="" onClick={HandleNum}>4</button></div>
            <div className="operator"><button className="btn" id="five"  data-num="" onClick={HandleNum}>5</button></div>
            <div className="operator"><button className="btn" id="six"  data-num="" onClick={HandleNum}>6</button></div>
            <div className="operator"><button className="btn " id="multiply" data-op="" onClick={handleOp}>&#215;</button></div>
            <div className="operator"><button className="btn" id="one" data-num="" onClick={HandleNum}>1</button></div>
            <div className="operator"><button className="btn" id="two" data-num="" onClick={HandleNum}>2</button></div>
            <div className="operator"><button className="btn" id="three" data-num="" onClick={HandleNum}>3</button></div>
            <div className="operator"><button className="btn " id="subtract" data-op="" onClick={handleOp}>-</button></div>
            <div className="operator"><button className="btn" id="decimal" data-op="" ref={myRef} onClick={handleDecimal}>.</button></div>
            <div className="operator"><button className="btn" id="zero" data-num="" onClick={HandleNum}>0</button></div>
            <div className="operator"><button className="btn" id="equals" data-op="" onClick={handleEqual}>=</button></div>
            <div className="operator"><button className="btn " id="add" data-op="" onClick={handleOp}>+</button></div>
        </div>
    </div>
  );
}

export default App;
