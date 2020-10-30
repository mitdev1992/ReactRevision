import React from "react";
import "./App.css";
import Person from "./Person/person";

class App extends React.Component {
  state = {
    persons: [
      { id: "1", name: "", age: "" },
      { id: "2", name: "", age: "" },
      { id: "3", name: "", age: "" },
    ],
    otherValues: "MIt",
    showToggle: false,
  };

  switchOthervalues = () => {
    this.setState({
      otherValues: "Mit Is working in React Developer",
    });
  };

  namechangehadler = (event, id1) => {
    //we have to get element here individually hold the index
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id1;
    });
    //get the person its self and we crate shallow copy of Person
    const person = { ...this.state.persons[personIndex] };
    //Update the Person Name
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (index) => {
    //This way also work but the Standard Practice is That we have to have to update the state immutably
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };
  toggler = () => {
    console.log("toggler");
    const doeshow = this.state.showToggle;
    this.setState({
      showToggle: !doeshow,
    });
  };
  render() {
    //Here You are manging Toggle Dynamically

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
              //https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers:Refer this for event handlers in javascript
            );
          })}
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
        <button onClick={this.toggler}>Hanlde Togle</button>
        {persons}
      </div>
    );
  }
}
export default App;
