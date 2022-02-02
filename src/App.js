import './App.css';
import React, { useState } from 'react';



function Number(props) {
  return ( 
      <button onClick={props.onClick}>
        {props.value}
      </button>
  );
}

function AcButton(props) {
  return ( 
      <button onClick={props.onClick}>
        {props.value}
      </button>
  );
}


function App() {

  const [result, setResult] = useState(0);

  function handleClick(e) {
    if(e.target.innerHTML === ".") {
      if(result.toString().includes(".")) {
        console.log("sadasda")
        return;
      }
    } 
    else if(e.target.innerHTML === "+/-") {
      setResult(result * -1);
      return;
    }
    result !== 0 ? setResult(result + e.target.innerHTML) : setResult(e.target.innerHTML);
  }

  function handleAC(e) {
    setResult(0);
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
                    <div className="button"><Number value = {"AC"} onClick = {(e) => handleAC(e)}/></div>
                    <div className="button"><Number value = {"+/-"} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button"><button>%</button></div>
                    <div className="button orange"><button>÷</button></div>
                </div>
                <div>
                    <div className="button"><Number value = {7} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button"><Number value = {8} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button"><Number value = {9} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button orange"><button>x</button></div>
                </div>
                <div>
                    <div className="button"><Number value = {4} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button"><Number value = {5} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button"><Number value = {6} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button orange"><button>-</button></div>
                </div>
                <div>
                    <div className="button"><Number value = {1} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button"><Number value = {2} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button"><Number value = {3} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button orange"><button>+</button></div>
                </div>
                <div>
                    <div className="button  wide"><Number value = {0} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button"><Number value = {"."} onClick = {(e) => handleClick(e)}/></div>
                    <div className="button orange"><button>=</button></div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default App;
