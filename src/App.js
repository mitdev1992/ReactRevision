import React from "react";
import "./App.css";
import Person from "./Person/person";
import Radium ,{StyleRoot} from 'radium';

class App extends React.Component {
  state = {
    persons: [
      { id: "1", name: "", age: "" },
      { id: "2", name: "", age: "" },
      { id: "3", name: "", age: "" },
      { id: "4", name: "", age: "" },
      { id: "5", name: "", age: "" },
      { id: "6", name: "", age: "" },
    ],
    buttonText: "Handle Togle",
  };

  switchOthervalues = () => {
    this.setState({
      otherValues: "Mit Is working in React Developer",
    });
  };

  namechangehadler = (event, id1) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id1;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };
  toggler = () => {
    const doeshow = this.state.showToggle;
    this.setState({
      showToggle: !doeshow,
      buttonText: "Please Go Back To tHe Previous Page",
    });
  };
  render() {
    const style = {
      backgroundColor: "blue",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

    let persons = null;
    if (this.state.showToggle) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                name={p.name}
                age={p.age}
                clickDelete={this.deletePersonHandler.bind(this, index)}
                key={p.id}
                changed={(event) => this.namechangehadler(event, p.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "Red";
      style[":hover"]={
        backgroundColor:'lightred',
        color:'black'
      }
    }
    if (this.state.showToggle === false) {
      persons = (
        <div>
          <h1>Please Click on The button</h1>
        </div>
      );
    }
   // eslint-disable-next-line
   let className=[]
   if(this.state.persons.length <=4){
    className.push('red');
   }
   if(this.state.persons.length<=2){
     className.push('bold');
   }
   return (
     <StyleRoot>
      <div className="App">
        <p  className={className}>Dynamic Rendering</p>
        <button style={style} onClick={this.toggler}>
          {this.state.buttonText}
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
