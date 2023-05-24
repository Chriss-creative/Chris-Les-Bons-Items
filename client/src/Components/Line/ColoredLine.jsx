import React from "react";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
      width: 150,
      margin: "80px",
    }}
  />
);

export default ColoredLine;
