import React from "react";

const Cockpit = (props) => {
  let className = [];
  if (props.persons.length <= 4) {
    className.push("red");
  }
  if (props.persons.length <= 2) {
    className.push("bold");
  }

  return (
    <div>
      <p className={className}>Dynamic Rendering</p>
      <button onClick={props.toggler}>{props.button}</button>
    </div>
  );
};

export default Cockpit;
