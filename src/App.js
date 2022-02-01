import './App.css';



function Number(props) {
  return (
    <div className = "button">
      <button onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <div id="root">
        <div className="app">
            <div className="display">
                <div>0</div>
            </div>
            <div className="button-panel">
                <div>
                    <div className="button"><button>AC</button></div>
                    <div className="button"><button>+/-</button></div>
                    <div className="button"><button>%</button></div>
                    <div className="button orange"><button>÷</button></div>
                </div>
                <div>
                    <Number value = {7}/>
                    <Number value = {8}/>
                    <Number value = {9}/>
                    <div className="button orange"><button>x</button></div>
                </div>
                <div>
                    <Number value = {4}/>
                    <Number value = {5}/>
                    <Number value = {6}/>
                    <div className="button orange"><button>-</button></div>
                </div>
                <div>
                    <Number value = {1}/>
                    <Number value = {2}/>
                    <Number value = {3}/>
                    <div className="button orange"><button>+</button></div>
                </div>
                <div>
                    <div className="button  wide"><button>0</button></div>
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
