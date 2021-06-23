import React from "react";
import "./Header.css";

export class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header-title">{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
