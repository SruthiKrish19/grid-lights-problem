import React from "react";
import Box from "./Box";
import "./box.css";

const BoxSelection = ({ data }) => {
  return (
    <div className="box-selection-body">
      <div className="box-selection">
        <Box data={data} />
      </div>
      <button onClick={() => window.location.reload()}>Reset Grid</button>
    </div>
  );
};

export default BoxSelection;
