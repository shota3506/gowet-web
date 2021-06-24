import React from "react";
import logo from "../assets/loading.svg";
import "./Loading.css";

export class Loading extends React.Component {
  render() {
    return (
      <div className="Loading">
        <img src={logo} className="Loading-logo" alt="logo" />
      </div>
    );
  }
}

export default Loading;
