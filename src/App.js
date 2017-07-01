import React, { Component } from 'react';
import IoIosEyeOutline from 'react-icons/lib/io/ios-eye-outline';
import './App.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    const states = Object.keys(props.map || {});
    const activeState = props.default || states[0];

    this.state = {
      active: activeState,
    }
  }

  render() {
    const activeComponent = (this.props.map || {})[this.state.active] || {};
    const component = activeComponent.component || null;
    const props = activeComponent.props || null;
    return (
      <div className="sonaak-toggle">
        { component ? component(...props) : null }
        <IoIosEyeOutline size="100%" style={{
          opacity: .2
        }}/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Toggle />
      </div>
    );
  }
}

export default App;
