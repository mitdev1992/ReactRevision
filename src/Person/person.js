import React from "react";

//Props.children --This is the reserve Key Word which is basically Used when you want to pass something
const Person = (props) => {
  return (
    <div>
      <p onClick={props.clickDelete}>
        I am {props.name} and I am {props.age} old
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        placeholder="name"
        onChange={props.changed}
        value={props.name}
      />
      z
    </div>
  );
};
export default Person;
