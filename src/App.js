import React, { Component } from 'react';
import './App.css';
import { Input } from './form/Input.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Input
          label="username"
          notification={{
            type: "error",
            message: "The login name/password is not found in our system"
          }}
        />
      </div>
    );
  }
}

export default App;
