import React, { Component } from 'react';
import IoEye from 'react-icons/lib/io/eye';
import IoEyeDisabled from 'react-icons/lib/io/eye-disabled';
import './App.css';
import { StaticToggle, On, Off } from './form/Toggle.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <StaticToggle isOn={true}>
          <On render={IoEye} style={{
            width: "5em",
            height: "5em"
          }}/>
          <Off render={IoEyeDisabled} style={{
            width: "5em",
            height: "5em"
          }}/>
        </StaticToggle>
      </div>
    );
  }
}

export default App;
