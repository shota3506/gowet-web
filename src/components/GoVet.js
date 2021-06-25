import React from "react";
import "./GoVet.css";

import { GoVetPackage } from "./GoVetPackage.js";

export class GoVet extends React.Component {
  render() {
    const vet = this.props.vet;

    return (
      <div className="GoVet">
        {Object.entries(vet).map(([key, value]) => {
          return <GoVetPackage key={key} pkg={key} analyses={value} />;
        })}
      </div>
    );
  }
}

export default GoVet;
