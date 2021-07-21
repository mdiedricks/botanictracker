import React from "react";

const Plant = (props) => {
  const { plant, handleDelete, handlePatch, loggedInStatus } = props;

  return (
    <div className={"card"}>
      <div className={"card-content"}>
        <span className={"type-sec"}>{plant.age} yrs</span>
        <h3>{plant.name}</h3>
        <p>{plant.species}</p>
      </div>
      <div className={"card-actions"}>
        {/* <button className={"btn--sec"}>Info</button> */}
        {loggedInStatus && (
          <button
            className={"btn--sec btn--sml"}
            onClick={() => handlePatch(plant)}
          >
            Edit
          </button>
        )}
        {loggedInStatus && (
          <button
            className={"btn--sec btn--sml"}
            onClick={() => handleDelete(plant)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Plant;
