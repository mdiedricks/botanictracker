import React, { useState, useEffect } from "react";

const Modal = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const [plantObj, setPlantObj] = useState({});

  useEffect(() => {
    setIsDelete(props.isDelete);
  }, [props.isDelete]);
  useEffect(() => {
    setPlantObj(props.patchPlant);
  }, [props.patchPlant]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPlantObj({ ...plantObj, [name]: value });
  };

  const deleteModal = (
    <section>
      <h2>Are you sure you want to delete this plant?</h2>
      <button onClick={() => props.patchQuery(plantObj)}>Yes</button>
      <button onClick={() => props.toggleModal}>No</button>
    </section>
  );
  const editModal = (
    <section>
      <h2>Edit props.</h2>
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
      <label>age</label>
      <input
        type="number"
        name="age"
        value={plantObj.age}
        onChange={changeHandler}
      ></input>
      <button onClick={() => props.patchQuery(plantObj)}>Submit</button>
      <button onClick={() => props.toggleModal}>Cancel</button>
    </section>
  );

  return <div className="screen">{isDelete ? deleteModal : editModal}</div>;
};

export default Modal;
