import React, { Component } from 'react';
// import logo from './logo.svg';
import Student from './Components/Student';
import Movies from './Components/Movies';
import './App.css';

// how do I get rid of the React. before Component?
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World.</h1>
        <Student name="Charmaine, div" />
        <Movies />
      </div>
    );
  }
}

export default App;
