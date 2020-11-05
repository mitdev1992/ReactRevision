import React from "react";
import "./App.css";
import Persons from "../components/Persons/persons";
import CockPit from "../components/Cockpit/cockpit";
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
    let persons = null;
    if (this.state.showToggle) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.namechangehadler}
          />
        </div>
      );
    }
    if (this.state.showToggle === false) {
      persons = (
        <div>
          <h1>Please Click on The button</h1>
        </div>
      );
    }

    return (
      <div className="App">
        <CockPit
          persons={this.state.persons}
          button={this.state.buttonText}
          toggler={this.toggler}
        />
        {persons}
      </div>
    );
  }
}
export default App;
