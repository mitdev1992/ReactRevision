import React from "react";
import Person from "../Person/person";

const persons = (props) =>
  props.persons.map((p, index) => {
    return (
      <Person
        name={p.name}
        age={p.age}
        clickDelete={()=>props.clicked(index)}
        key={p.id}
        changed={(event) => props.changed(event, p.id)}
      />
    );
  });
export default persons;