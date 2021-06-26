import React from "react";
import "./ErrorMessage.css";

export class ErrorMessage extends React.Component {
  render() {
    const message = this.props.message;

    return (
      <div className="ErrorMessage">
        <div className="ErrorMessage-message">{message}</div>
      </div>
    );
  }
}

export default ErrorMessage;
