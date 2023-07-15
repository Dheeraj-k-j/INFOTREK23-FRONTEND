import React from "react";

function SubmitButton({btnProp}) {
  return (
    <button type="submit" className={`submit-button ${btnProp.classes}`}>
      <div className="submit-button__label">{btnProp.text}</div>
      <div className="submit-button__icon"></div>
    </button>
  );
}

export default SubmitButton;
