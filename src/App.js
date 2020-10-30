
import React from 'react';
import './App.css';
import Person from './Person/person';
import UserInput from './UserInput/userinput';
import UserOutput from './UserOutput/useroutput';
class App extends React.Component {
  state = {
    persons: [{ name: "Mit", age: "28" }, { name: "Foram", age: "40" }, { name: "ChanduBhai", age: "100" }], otherValues: 'MIt',userName:'LamarUniversity'
  }


  //function to change the text
  switchName = (newName) => {
    console.log('SwicthName');
    this.setState({ persons: [{ name: newName, age: "58" }, { name: "ShaileshBhai", age: "59" }, { name: "Jatusheth", age: "11" }] })
  }

  switchOthervalues = () => {
    this.setState({
      otherValues: 'MIt Is working in React Developer'
    })
  }

  namechangehadler = (event) => {
    console.log('NameChangehandler');
    this.setState({ persons: [{ name: "Max", age: "58" }, { name: event.target.value, age: "59" }, { name: event.target.value, age: "11" }] })

  }

  useinputchagehandler = (event) =>{
    this.setState({
      userName:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am React Application</h1>

        <button onClick={this.switchName.bind(this, 'Change from button')}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchName.bind(this, "Changed from paragraph")}
          onChange={this.namechangehadler}>
          Foram Patel
          </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} onChange={this.namechangehadler}
        />
        <br />
        <button onClick={this.switchOthervalues}>Switch Other Values</button>
        <h1>{this.state.otherValues}</h1>
        <br />
    <UserInput  onChange1={this.useinputchagehandler}>{this.state.UserInput}</UserInput>
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Foram" />
        <UserOutput userName="SandyCSRide"/>

      </div>

    );

    //Logic Behind the scene 
    // return React.createElement('div',null,'h1','Hi,React Create Element');  
  }
}
export default App;



/* UseState Methods are below


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