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
  const [saveOperand, setSaveOperand] = useState(0);
  const handleClick = (e) => {
    if(e.target.innerHTML === ".") {
      if(result.toString().includes(".")) {
        return;
      } else {
        setResult(result + ".");
      }
    } 
    else if(e.target.innerHTML === "+/-") {
      setResult(result * -1);
      return;
    }
    else if(e.target.innerHTML === "AC") {
      setResult(0);
      setNum2(0);
      setSaveOperand(0);
      setOperator("");
      return;
    }
    else if(e.target.innerHTML === "%") {
      setResult((result / 100));
      return;
    }
    else if(["+","-","x","÷", "="].includes(e.target.innerHTML)) {
      if(num2 !== 0 && operator !== "" && e.target.innerHTML !== "=" && operator !== e.target.innerHTML) {  //update operator to the newly clicked one
        setOperator(e.target.innerHTML);
        setSaveOperand(0);
        return;
      }
      if((e.target.innerHTML === "=" && operator === "+") || (e.target.innerHTML === "+" && operator === "+")) {
        console.log("operand +")
        if(saveOperand === 0) {
          setSaveOperand(result);
        }
        setNum2(saveOperand);
        setResult(parseFloat(num2) + parseFloat(result));
        console.log("num2: " + num2 + " saveOperand: " + saveOperand + " result " + result)
        //setOperator("");
        if(e.target.innerHTML === "+") {
          setNum2(0); 
        }
        return;
      }
      if(e.target.innerHTML === "=" && operator === "-") {
        setResult(parseFloat(num2) - parseFloat(result));
        //setOperator("");
        return;
      }
      if(e.target.innerHTML === "=" && operator === "x") {
        setResult(parseFloat(num2) * parseFloat(result));
        //setOperator("");
        return;
      }
      if(e.target.innerHTML === "=" && operator === "÷") {
        setResult(parseFloat(num2) / parseFloat(result));
        //setOperator("");
        return;
      }
      setOperator(e.target.innerHTML);
      setNum2(result);
      setResult(0);
      return;
    }
    else {
      result !== 0 ? setResult(result + e.target.innerHTML) : setResult(e.target.innerHTML);
    }
  }

  return (
    <div className="App">
    <div id="root">
        <div className="app">
            <div className="display">
                <div>{operator === "" || result !== 0 ? result : num2}</div>
            </div>
            <div className="button-panel">
                <div>
                    <Button value = {"AC"} className= "button" onClick = {handleClick}/>
                    <Button value = {"+/-"} className= "button" onClick = {handleClick}/>
                    <Button value = {"%"} className= "button" onClick = {handleClick}/>
                    <Button value = {"÷"} className= "button orange" onClick = {(e) => handleClick(e)}/>
                </div>
                <div>
                    <Button value = {7} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {8} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {9} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {"x"} className= "button orange" onClick = {(e) => handleClick(e)}/>
                </div>
                <div>
                    <Button value = {4} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {5} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {6} className= "button" onClick = {(e) => handleClick(e)}/>
                    <Button value = {"-"} className= "button orange" onClick = {(e) => handleClick(e)}/>
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
                    <Button value = {"="} className= "button orange" onClick = {(e) => handleClick(e)}/>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default App;
