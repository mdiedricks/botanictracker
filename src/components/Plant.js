import React, { useState } from "react";
import { MdModeEdit, MdDelete, MdInfoOutline } from "react-icons/md";
import Modal from "../components/Modal";

const Plant = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { plant } = props;

  const handleDelete = () => {
    setIsDelete(true);
    toggleModal();
  };
  const handlePatch = () => {
    setIsDelete(false);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getPlantModal = (plant) => {
    return (
      <Modal isDelete={isDelete} plant={plant} toggleModal={toggleModal} />
    );
  };

  return (
    <div className={"card"}>
      <div className={"card-content"}>
        <h3>{plant.name}</h3>
        <p>{plant.species}</p>
        <p className={"type-sec"}>{plant.age} yrs</p>
      </div>
      <div className={"card-actions"}>
        <MdInfoOutline />
        {true && <MdModeEdit onClick={() => handlePatch(plant)} />}
        {true && <MdDelete onClick={() => handleDelete(plant)} />}
      </div>
      {showModal && (
        <section className={"modal-screen"}>{getPlantModal(plant)}</section>
      )}
    </div>
  );
};

export default Plant;
