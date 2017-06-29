import React, { Component } from 'react';

/**
 * Input is a text field that has nothing but text in it.
 */
class Input extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      value: "",
      label: props.label,
      focused: false
    }

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    const target = event.target;
    if (typeof this.props.onChange === "function") {
      this.props.onChange(target.value, this.state.value, event, this);
    }

    this.setState({
      value: target.value
    });
  }

  onFocus() {
    this.setState({
      focused: true
    });
  }

  onBlur() {
    this.setState({
      focused: false
    });
  }

  render() {
    const labelClassName = "label" +
      (this.state.focused? " focused" : "") +
      (this.state.value === "" ? "" : " hidden");
    const activeLabelClassName = "active-label" +
      (this.state.value === "" ? " hidden" : "");

    return (
      <div className="sonaak-text-input">
        <div className={labelClassName}>
          {this.state.label}
        </div>
        <input
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.state.value}
        />
        <div className="line"></div>
        <div
          className={activeLabelClassName}
        >
          {this.state.label}
        </div>
      </div>
    );
  }
}

export default Input;
