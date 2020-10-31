import React from "react";
import "./App.css";
import Validationinput from "./validationFile.js/validationinput";
import Chart from "./chart/chart";

class App extends React.Component {
  state = {
    userInput: " ",
  };

  inputChageHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  //Delete Char
  deleteChar = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatetext = text.join("");
    this.setState({
      userInput: updatetext,
    });
  };

  render() {
    //By This way You can render Component
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Chart
          characterList={ch}
          deleteChar={() => {
            this.deleteChar(index);
          }}
        />
      );
    });

    return (
      <div className="App">
        <Validationinput
          userInput={this.state.userInput}
          onchange={this.inputChageHandler}
        />
        {charList}
      </div>
    );
  }
}
export default App;
