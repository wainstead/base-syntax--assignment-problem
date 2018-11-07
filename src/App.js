import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      'swain',
      'ldesslok',
    ]
  }

  userNameChangeHandler = (event) => {
    this.setState({
      usernames: [
        event.target.value,
        event.target.value,
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'navajowhite',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

      <UserInput
      style={style}
      changed={this.userNameChangeHandler}
      username={this.state.usernames[0]}
      />
      <UserOutput 
      username={this.state.usernames[0]} 
      />
      <UserOutput 
      username={this.state.usernames[1]}
      />
      </div>
    );
  }
}

export default App;
