import React, { Component } from 'react';

function handleBlur() {
  this.setState({
    focused: false
  });
}

function handleFocus() {
  this.setState({
    focused: true
  })
}

function handleChange(event) {
  const target = event.target;
  if (typeof this.props.onChange === "function") {
    this.props.onChange(target.value, this.state.value, event, this);
  }

  this.setState({
    value: target.value
  });
}

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

    this.onChange = handleChange.bind(this);
    this.onFocus = handleFocus.bind(this);
    this.onBlur = handleBlur.bind(this);
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
          type="text"
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

class Password extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      value: "",
      label: props.label,
      redacted: true,
      focused: false
    }

    this.onChange = handleChange.bind(this);
    this.onFocus = handleFocus.bind(this);
    this.onBlur = handleBlur.bind(this);
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
          type="password"
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

export { Input, Password };
