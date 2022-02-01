import './App.css';
import React, { useState } from 'react';



function Number(props) {
  return ( 
      <button onClick={props.onClick}>
        {props.value}
      </button>
  );
}

function App() {

  const [result, setResult] = useState(0);

  function handleClick(e) {
    setResult(e.target.value);
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
                    <div className="button"><button>AC</button></div>
                    <div className="button"><button>+/-</button></div>
                    <div className="button"><button>%</button></div>
                    <div className="button orange"><button>÷</button></div>
                </div>
                <div>
                    <div className="button"><Number value = {7}/></div>
                    <div className="button"><Number value = {8}/></div>
                    <div className="button"><Number value = {9}/></div>
                    <div className="button orange"><button>x</button></div>
                </div>
                <div>
                    <div className="button"><Number value = {4}/></div>
                    <div className="button"><Number value = {5}/></div>
                    <div className="button"><Number value = {6}/></div>
                    <div className="button orange"><button>-</button></div>
                </div>
                <div>
                  <div className="button">
                    <Number 
                      value = {1}
                      onClick = {(e) => handleClick(e)}
                    />
                  </div>
                    <div className="button"><Number value = {2}/></div>
                    <div className="button"><Number value = {3}/></div>
                    <div className="button orange"><button>+</button></div>
                </div>
                <div>
                    <div className="button  wide"><Number value = {0}/></div>
                    <div className="button"><button>.</button></div>
                    <div className="button orange"><button>=</button></div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default App;
