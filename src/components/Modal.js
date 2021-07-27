import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  updatePlantName,
  updatePlantSpecies,
  updatePlantAge,
  deletePlant,
} from "../redux/plantsSlice";

const Modal = ({ plant, isDelete, toggleModal }) => {
  const [plantObj, setPlantObj] = useState(plant);
  const history = useHistory();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPlantObj({ ...plantObj, [name]: value });
  };

  const confirmUpdate = async () => {
    dispatch(updatePlantName({ _id: plantObj._id, name: plantObj.name }));
    dispatch(
      updatePlantSpecies({ _id: plantObj._id, species: plantObj.species })
    );
    dispatch(updatePlantAge({ _id: plantObj._id, age: plantObj.age }));
    history.push("/");
  };
  const confirmDelete = async () => {
    dispatch(deletePlant({ _id: plantObj._id }));
    history.push("/");
  };

  const deleteModal = (
    <form>
      <h2>Are you sure you want to delete {plantObj.name}?</h2>
      <button onClick={() => confirmDelete}>Yes</button>
      <button onClick={() => toggleModal}>No</button>
    </form>
  );
  const editModal = (
    <form>
      <h2>Edit {plant.name}</h2>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={plantObj.name}
        onChange={changeHandler}
      ></input>
      <label>Species</label>
      <input
        type="text"
        name="species"
        value={plantObj.species}
        onChange={changeHandler}
      ></input>
      <label>Age</label>
      <input
        type="number"
        name="age"
        value={plantObj.age}
        onChange={changeHandler}
      ></input>
      <div className={"form-btn-aside"}>
        <button className={"btn--prim btn--lg"} onClick={confirmUpdate}>
          Submit
        </button>
        <button className={"btn--sec btn--lg"} onClick={toggleModal}>
          Cancel
        </button>
      </div>
    </form>
  );

  return (
    <div className="screen">
      {isDelete && plantObj && deleteModal}
      {!isDelete && plantObj && editModal}
    </div>
  );
};

export default Modal;
