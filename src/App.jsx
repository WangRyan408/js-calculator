import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <div id="display">
            <p className="calc" id="prev"></p>
            <p className="calc" id="current">0</p>
        </div>
        <div id="ac">
            <div className="child"><button className="delete" id="clear">Clear</button></div>
            
            <div className="child"><button className="delete" id="backspace">Delete</button></div>
        </div>
        <div id="input">
            <div className="operator"><button className="btn" data-num="">7</button></div>
            <div className="operator"><button className="btn" data-num="">8</button></div>
            <div className="operator"><button className="btn" data-num="">9</button></div>
            <div className="operator"><button className="btn" data-op=""> &#247; </button></div>
            <div className="operator"><button className="btn" data-num="">4</button></div>
            <div className="operator"><button className="btn" data-num="">5</button></div>
            <div className="operator"><button className="btn" data-num="">6</button></div>
            <div className="operator"><button className="btn" data-op=""> &#215; </button></div>
            <div className="operator"><button className="btn" data-num="">1</button></div>
            <div className="operator"><button className="btn" data-num="">2</button></div>
            <div className="operator"><button className="btn" data-num="">3</button></div>
            <div className="operator"><button className="btn" data-op=""> - </button></div>
            <div className="operator"><button className="btn" id="period" data-op="" disabled="">.</button></div>
            <div className="operator"><button className="btn" data-num="">0</button></div>
            <div className="operator"><button className="btn" data-op=""> = </button></div>
            <div className="operator"><button className="btn" data-op=""> + </button></div>
        </div>
    </div>
  );
}

export default App;
