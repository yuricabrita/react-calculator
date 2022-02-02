import './App.css';
import React, { useState } from 'react';



function Button(props) {
  return (
    <div className= {props.className}>
      <button onClick={props.onClick}>
        {props.value}
      </button>
    </div> 
  );
}

function App() {

  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [num2, setNum2] = useState(0);

  const handleClick = (e) => {
    if(e.target.innerHTML === ".") {
      if(result.toString().includes(".")) {
        return;
      }
    } 
    else if(e.target.innerHTML === "+/-") {
      setResult(result * -1);
      return;
    }
    else if(e.target.innerHTML === "AC") {
      setResult(0);
      return;
    }
    else if(e.target.innerHTML === "%") {
      setResult((result / 100));
      return;
    }
    else if(e.target.innerHTML === "+") {
      if(operator === "") {
        
      }
    }
    result !== 0 ? setResult(result + e.target.innerHTML) : setResult(e.target.innerHTML);
  }

  return (
    <div className="App">
    <div id="root">
        <div className="app">
            <div className="display">
                <div>{result}</div>
            </div>
            <div className="button-panel">
                <div>
                    <Button value = {"AC"} className= "button" onClick = {handleClick}/>
                    <Button value = {"+/-"} className= "button" onClick = {handleClick}/>
                    <Button value = {"%"} className= "button" onClick = {handleClick}/>
                    <div className="button orange"><button>÷</button></div>
                </div>
                <div>
                    <Button value = {7} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {8} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {9} className= "button" onClick = {(e) => handleClick(e)}/>
                    <div className="button orange"><button>x</button></div>
                </div>
                <div>
                    <Button value = {4} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {5} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {6} className= "button" onClick = {(e) => handleClick(e)}/>
                    <div className="button orange"><button>-</button></div>
                </div>
                <div>
                    <Button value = {1} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {2} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {3} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {"+"} className= "button orange" onClick = {(e) => handleClick(e)}/>
                </div>
                <div>
                    <Button value = {0} className = {"button wide"} onClick = {(e) => handleClick(e)}/>
                    <Button value = {"."} className= "button" onClick = {(e) => handleClick(e)}/>
                    <div className="button orange"><button>=</button></div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default App;
