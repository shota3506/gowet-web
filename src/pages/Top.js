import React from "react";
import "./Top.css";

import { Error } from "../components/Error.js";
import { Form } from "../components/Form.js";
import { GoVet } from "../components/GoVet.js";

export class Top extends React.Component {
  constructor(props) {
    super(props);
    this.handlePathChange = this.handlePathChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVet = this.handleVet.bind(this);

    this.state = { path: "", error: null, vet: null };
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
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw r.statusText;
      })
      .then(
        (r) => {
          this.setState({
            path: r.path,
            error: null,
            vet: r.results,
          });
        },
        (e) => {
          this.setState({
            path: path,
            error: e,
            vet: null,
          });
        }
      )
      .then(() => this.props.onLoad());
  }

  render() {
    const placeholder = "github.com/tenntenn/greeting";
    const path = this.state.path;
    const error = this.state.error;
    const vet = this.state.vet;

    return (
      <div className="Top">
        <Form
          placeholder={placeholder}
          value={path}
          onValueChange={this.handlePathChange}
          onSubmit={this.handleSubmit}
        />
        {error !== null && <Error message={error}/>}
        {vet !== null && <GoVet vet={vet} />}
      </div>
    );
  }
}

export default Top;
