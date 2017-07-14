import React, { Component } from 'react';

class On extends Component {
  constructor(props) {
    super(props);
    this.class = props.render;
    this.childProps = Object.assign({}, {}, props);
    delete this.childProps["render"];
    delete this.childProps["turnOff"];
  }

  render() {
    return (
      <div onClick={this.props.turnOff}>
        {React.createElement(this.class, this.childProps)}
      </div>
    );
  }
}

class Off extends On {
  constructor(props) {
    super(props);
    delete this.childProps["turnOn"];
    this.props = props;
  }

  render() {
    return (
      <div onClick={this.props.turnOn}>
        {React.createElement(this.class, this.childProps)}
      </div>
    );
  }
}

/*
 * We want to be able to do something like
 * <Toggle>
 *   <On class={ClassA} ...props />
 *   <Off class={ClassB} ...props />
 * </Toggle>
 */
class StaticToggle extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onToggle = this.props.onToggle || function(){};

    this.state = {
      isOn: this.props.isOn
    };

    this.childNodes = {
      "on": null,
      "off": null
    };

    if (props.children.length && props.children.length >= 2) {
      props.children.forEach((child) =>
        this.setChildNode(child, this.childNodes));
    } else {
      let child = props.children;
      this.setChildNode(child, this.childNodes);
    }
  }

  setChildNode(child, childNodes) {
    const turnOff = this.turnOff.bind(this);
    const turnOn = this.turnOn.bind(this);

    if (child.type.name === "On") {
      childNodes["on"] = React.cloneElement(child, {turnOff: turnOff});
    } else if (child.type.name === "Off") {
      childNodes["off"] = React.cloneElement(child, {turnOn: turnOn});
    } else {
      console.warn("Only objects <On .../> or <Off ... /> are rendered.");
    }
  }

  turnOn() {
    this.setState({
      "isOn": true
    });

    this.onToggle(this, true);
  }

  turnOff() {
    this.setState({
      "isOn": false
    });

    this.onToggle(this, false);
  }

  render() {
    return (
      <div className="sonaak-toggle">
        {
          this.state.isOn ? this.childNodes["on"] : this.childNodes["off"]
        }
      </div>
    )
  }
}

export {StaticToggle, On, Off};
