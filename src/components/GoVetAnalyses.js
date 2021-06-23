import React from "react";
import "./GoVetAnalyses.css";

import { GoVetAnalysis } from "./GoVetAnalysis.js";

export class GoVetAnalyses extends React.Component {
  render() {
    const name = this.props.name;
    const contents = this.props.contents;

    return (
      <div className="GoVetAnalyses">
        <div className="GoVetAnalyses-name">{name}</div>
        <div className="GoVetAnalyses-contents">
          {contents.map((data, index) => {
            return (
              <GoVetAnalysis
                key={index}
                message={data.message}
                posn={data.posn}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default GoVetAnalyses;
