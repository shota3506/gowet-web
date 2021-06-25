import React from "react";
import "./Error.css";

export class Error extends React.Component {
  render() {
    const message = this.props.message;

    return (
      <div className="Error">
        <div className="Error-message">{message}</div>
      </div>
    );
  }
}

export default Error;
