import React from "react";

const chart = (props) => {
  const style = {
    color: "Red",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    fontsize: "75px",
    backgroundcolor: "blue",
  };

  return (
    <div style={style} onClick={props.deleteChar}>
      {props.characterList}
    </div>
  );
};
export default chart;
