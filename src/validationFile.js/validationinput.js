import React from "react";

const validationinput = (props) => {
  let validationMessage = "Too Short";

  if (props.userInput.length > 5) {
    validationMessage = "Too Long";
  }

  return (
    <div>
      <input type="text" onChange={props.onchange} onchange={props.onchange} />
      <h1>{validationMessage}</h1>
    </div>
  );
};
export default validationinput;
