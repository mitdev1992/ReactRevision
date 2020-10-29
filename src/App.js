
import React from 'react';
import './App.css';
import Person from './Person/person';

class App extends React.Component {
  state = {
    persons: [{ name: "Mit", age: "28" }, { name: "Foram", age: "40" }, { name: "ChanduBhai", age: "100" }], otherValues: 'MIt'
  }
  
  
  //function to change the text
  switchName = () => {
    this.setState({ persons: [{ name: "Harrison", age: "58" }, { name: "ShaileshBhai", age: "59" }, { name: "Jatusheth", age: "11" }] })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am React Application</h1>
        <button onClick={this.switchName }>Switch Name</button>
        <p>{this.state.otherValues}</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>This is Inforamtion about Foram Patel</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >This is The Inforamtion about Chandu Patel</Person>
      </div>

    );

    //Logic Behind the scene 
    // return React.createElement('div',null,'h1','Hi,React Create Element');  
  }
}
export default App;


//UseState Methods are below
/* 
import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';

const App = props => {
  const [Personstate, Setpersonstate] = useState({
    persons: [{ name: "Mit", age: "28" }, { name: "Foram", age: "40" }, { name: "ChanduBhai", age: "100" }],
    otherValues: 'MIt'
  });

  const switchName = () => {
    Setpersonstate({
      persons: [{ name: "Harrison", age: "1008" }, { name: "Richard", age: "30000" }, { name: "Protesh", age: "2990" }],
      otherValues: 'Foramit'

    })
  }


  return (
    <div className="App">
      <h1>Hi I am React Application</h1>
      <button onClick={switchName}>Switch Name</button>

      <Person name={Personstate.persons[0].name} age={Personstate.persons[0].age} >{Personstate.otherValues}</Person>
      <Person name={Personstate.persons[1].name} age={Personstate.persons[1].age} />
      <Person name={Personstate.persons[2].name} age={Personstate.persons[2].age} />


    </div>
  )

}
export default App;

 */