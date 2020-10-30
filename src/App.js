import React from "react";
import "./App.css";
import Person from "./Person/person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Mit", age: "28" },
      { name: "Foram", age: "40" },
      { name: "ChanduBhai", age: "100" },
    ],
    otherValues: "MIt",
    userName: "LamarUniversity",
    showToggle: false,
  };
  switchName = (newName) => {
    this.setState({
      persons: [
        { name: "newName", age: "58" },
        { name: "ShaileshBhai", age: "59" },
        { name: "Jatusheth", age: "11" },
      ],
    });
  };

  switchOthervalues = () => {
    this.setState({
      otherValues: "MIt Is working in React Developer",
    });
  };

  namechangehadler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: "58" },
        { name: "Jay Patel", age: "59" },
        { name: "Jatan Patel", age: "11" },
      ],
    });
  };

  deletePersonHandler = (index) => {
    console.log("delete");
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };
  toggler = () => {
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
                clickDelete={() => this.deletePersonHandler(index)}
              />
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
