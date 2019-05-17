import React from "react";

const Smurf = props => {
  return <div>
    <div><strong>Name: </strong>{props.smurf.name}</div>
    <div><strong>Age: </strong>{props.smurf.age}</div>
    <div><strong>Height: </strong>{props.smurf.height}</div>
  </div>;
};

export default Smurf;
