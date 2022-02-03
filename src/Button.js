import React from "react";

function Button({ value, onClick, className }) {
  return (
    <div className={className}>
      <button onClick={() => onClick(value)}>{value}</button>
    </div>
  );
}

export default Button;
