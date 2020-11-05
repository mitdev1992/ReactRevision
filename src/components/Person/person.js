import React from "react";
import "./person.css";
import styled from "styled-components";

const StyleDiv = styled.div`
  .Person {
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
  }
  @media (min-width:500px) {
    width: 450px;
  }
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Person = (props) => {
  return (
    <StyleDiv>
    <div className={Person}>
      <p onClick={props.clickDelete}>
        I am {props.name} and I am {props.age} old
      </p>
      <p>{props.children}</p>
      <Input
        type="text"
        placeholder="name"
        onChange={props.changed}
        value={props.name}
      />
      <Button>Styled React</Button>
    </div>
    </StyleDiv>
  );
};
export default Person;
