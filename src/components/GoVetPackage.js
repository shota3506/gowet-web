import React from "react";
import "./GoVetPackage.css";

import { GoVetAnalyses } from "./GoVetAnalyses.js";

export class GoVetPackage extends React.Component {
  render() {
    const pkg = this.props.pkg;
    const analyses = this.props.analyses;

    return (
      <div className="GoVetPackage">
        <div className="GoVetPackage-name">{pkg}</div>
        {Object.entries(analyses).map(([key, value]) => {
          return (
            <GoVetAnalyses
              className="GoVetPackage-analyses"
              key={key}
              name={key}
              contents={value}
            />
          );
        })}
      </div>
    );
  }
}

export default GoVetPackage;
