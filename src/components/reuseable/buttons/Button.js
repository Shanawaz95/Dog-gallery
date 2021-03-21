import React from "react";
import "./Button.css";

function Button({ btnText, btnClick, style }) {
  return (
    <>
      <button style={style} className="btn" onClick={btnClick}>
        {btnText}
      </button>
    </>
  );
}

export default Button;
