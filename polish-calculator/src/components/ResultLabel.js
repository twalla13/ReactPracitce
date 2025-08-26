import React from "react";

const ResultLabel = (props) => {
  return (
    //Conditonally render the div for visibility

    // 	Short-circuit Evaluation (&&):
    // •	If props.result is null, the <div> won’t render at all.
    // •	If props.result has a value, the <div> and its contents will render.

    props.result !== null && (
      <div>
        <h2>Your result is {props.result}</h2>
      </div>
    )
  );
};

export default ResultLabel;
