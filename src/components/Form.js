import React from "react";
import "./Form.css";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const placeholder = this.props.placeholder;
    const value = this.props.value;

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <input
          className="Form-text"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
        />
        <input className="Form-submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
