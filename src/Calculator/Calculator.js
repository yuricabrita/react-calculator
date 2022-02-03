import Button from "../Button";
import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [num2, setNum2] = useState(0);

  const handleClick = (value) => {
    if (value === ".") {
      if (result.toString().includes(".")) {
        return;
      } else {
        setResult(result + ".");
      }
    } else if (value === "+/-") {
      setResult(result * -1);
      return;
    } else if (value === "AC") {
      setResult(0);
      setNum2(0);
      setOperator("");
      return;
    } else if (value === "%") {
      setResult(result / 100);
      return;
    } else if (["+", "-", "x", "÷", "="].includes(value)) {
      if (
        num2 !== 0 &&
        operator !== "" &&
        value !== "=" &&
        operator !== value
      ) {
        //update operator to the newly clicked one
        setOperator(value);
        setNum2(result);
        setResult(0);
        return;
      }
      // if(num2 !== 0 && operator !== "" && value !== "=" && operator === value) {  //update operator to the newly clicked one
      //   console.log("asdsd")
      //   if(value === "+") {
      //     let saveNum = result;
      //     setNum2(parseFloat(num2) + parseFloat(result));
      //     return;
      //   }
      // }
      if (value === "=" && operator === "+") {
        setResult(parseFloat(num2) + parseFloat(result));
        //console.log("num2: " + num2 + " saveOperand: " + saveOperand + " result " + result)
        //setOperator("");
        return;
      }
      if (value === "=" && operator === "-") {
        setResult(parseFloat(num2) - parseFloat(result));
        //setOperator("");
        return;
      }
      if (value === "=" && operator === "x") {
        setResult(parseFloat(num2) * parseFloat(result));
        //setOperator("");
        return;
      }
      if (value === "=" && operator === "÷") {
        setResult(parseFloat(num2) / parseFloat(result));
        //setOperator("");
        return;
      }
      setOperator(value);
      setNum2(result);
      setResult(0);
      return;
    } else {
      result !== 0 ? setResult(result + value) : setResult(value);
    }
  };
  return (
    <div className="App">
      <div id="root">
        <div className="app">
          <div className="display">
            <div>{operator === "" || result !== 0 ? result : num2}</div>
          </div>
          <div className="button-panel">
            <div>
              <Button value={"AC"} className="button" onClick={handleClick} />
              <Button value={"+/-"} className="button" onClick={handleClick} />
              <Button value={"%"} className="button" onClick={handleClick} />
              <Button
                value={"÷"}
                className="button orange"
                onClick={handleClick}
              />
            </div>
            <div>
              <Button value={7} className="button" onClick={handleClick} />
              <Button value={8} className="button" onClick={handleClick} />
              <Button value={9} className="button" onClick={handleClick} />
              <Button
                value={"x"}
                className="button orange"
                onClick={handleClick}
              />
            </div>
            <div>
              <Button value={4} className="button" onClick={handleClick} />
              <Button value={5} className="button" onClick={handleClick} />
              <Button value={6} className="button" onClick={handleClick} />
              <Button
                value={"-"}
                className="button orange"
                onClick={handleClick}
              />
            </div>
            <div>
              <Button value={1} className="button" onClick={handleClick} />
              <Button value={2} className="button" onClick={handleClick} />
              <Button value={3} className="button" onClick={handleClick} />
              <Button
                value={"+"}
                className="button orange"
                onClick={handleClick}
              />
            </div>
            <div>
              <Button
                value={0}
                className={"button wide"}
                onClick={handleClick}
              />
              <Button value={"."} className="button" onClick={handleClick} />
              <Button
                value={"="}
                className="button orange"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
