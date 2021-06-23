import React from "react";
import "./GoVet.css";

import { GoVetPackage } from "./GoVetPackage.js";

export class GoVet extends React.Component {
  render() {
    const goVet = this.props.goVet;

    return (
      <div className="GoVet">
        {Object.entries(goVet).map(([key, value]) => {
          return <GoVetPackage key={key} pkg={key} analyses={value} />;
        })}
      </div>
    );
  }
}

export default GoVet;
