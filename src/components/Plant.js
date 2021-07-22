import React from "react";
import { MdModeEdit, MdDelete, MdInfoOutline } from "react-icons/md";

const Plant = (props) => {
  const { plant, handleDelete, handlePatch, loggedInStatus } = props;

  return (
    <div className={"card"}>
      <div className={"card-content"}>
        <h3>{plant.name}</h3>
        <p>{plant.species}</p>
        <p className={"type-sec"}>{plant.age} yrs</p>
      </div>
      <div className={"card-actions"}>
        <MdInfoOutline />
        {loggedInStatus && <MdModeEdit onClick={() => handlePatch(plant)} />}
        {loggedInStatus && <MdDelete onClick={() => handleDelete(plant)} />}
      </div>
    </div>
  );
};

export default Plant;
