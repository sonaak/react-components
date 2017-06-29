import React, { Component } from 'react';
import Input from './form/Input.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Input label="first name"/>
        <Input label="last name"/>
      </div>
    );
  }
}

export default App;
