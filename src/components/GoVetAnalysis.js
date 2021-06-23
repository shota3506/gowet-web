import React from "react";
import "./GoVetAnalysis.css";

export class GoVetAnalysis extends React.Component {
  render() {
    const message = this.props.message;
    const posn = this.props.posn;

    return (
      <div className="GoVetAnalysis">
        <div className="GoVetAnalysis-message">{message}</div>
        <div className="GoVetAnalysis-posn">{posn}</div>
      </div>
    );
  }
}

export default GoVetAnalysis;
