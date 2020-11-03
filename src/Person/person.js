import React from "react";
import "./person.css";
import Radium from 'radium';

//Props.children --This is the reserve Key Word which is basically Used when you want to pass something
const Person = (props) => {

  const style={
     '@media(max-width: 480px)':{
       width:'250px',
       backgroundColor:'gray'
    }
  }

  return (
    <div className={Person} style={style}>
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

    </div>
  );
};
export default Radium(Person);
