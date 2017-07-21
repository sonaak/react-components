import React, { Component } from 'react';
import './App.css';
import {Password} from './form/Input.jsx';

class Checkbox extends Component {
  render() {
    return (<div
      className="sonaak-multiselect-checkbox"
    />);
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Password label="password" />
      </div>
    );
  }
}

export default App;
