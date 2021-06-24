import React from "react";
import "./Container.css";

import { Form } from "./Form.js";
import { GoVet } from "./GoVet.js";

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.handlePathChange = this.handlePathChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVet = this.handleVet.bind(this);

    this.state = { path: "", goVet: [] };
  }

  handlePathChange(path) {
    this.setState({ path: path });
  }

  handleSubmit() {
    this.handleVet(this.state.path);
  }

  handleVet(path) {
    const host = "http://localhost:8080/";

    this.props.onLoading();

    fetch(host + path)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            path: res.path,
            goVet: res.results,
          });
        },
        (error) => {
          console.log(error);
        }
      )
      .then(() => this.props.onLoad());
  }

  render() {
    const placeholder = "github.com/tenntenn/greeting";

    const path = this.state.path;
    const goVet = this.state.goVet;

    return (
      <div className="Container">
        <Form
          placeholder={placeholder}
          value={path}
          onValueChange={this.handlePathChange}
          onSubmit={this.handleSubmit}
        />

        <GoVet goVet={goVet} />
      </div>
    );
  }
}

export default Container;
