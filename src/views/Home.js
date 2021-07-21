import React, { useState, useEffect } from "react";
import axios from "axios";
import Plant from "../components/Plant";

const Home = (props) => {
  const [plants, setPlants] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [patchPlant, setPatchPlant] = useState({});

  useEffect(() => {
    if (!props.isLoggedIn) {
      getPlants();
    } else {
      getPlants({ owner: props.user._id });
    }
  }, [props.isLoggedIn, props.user._id]);

  const getPlants = async (userId) => {
    let url = "https://botanictracker-api.herokuapp.com/plants";
    if (userId) {
      url = url + "?owner=" + userId.owner;
    }
    const response = await axios({
      method: "get",
      url: url,
    });
    setPlants(response.data);
  };
  const deletePlant = async (id, uri) => {
    console.log("Function:: deleting plant");
    const res = await axios({
      method: "delete",
      url: uri + id,
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    return res;
  };
  const updatePlant = async (plant, uri) => {
    console.log("Function:: patching plant");
    const res = await axios({
      method: "patch",
      url: uri + plant._id,
      data: {
        name: plant.name,
        species: plant.species,
        age: plant.age,
      },
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    return res;
  };

  const patchQuery = async (plant) => {
    let url = "https://botanictracker-api.herokuapp.com/plants/";
    let id = plant._id;

    if (isDelete) {
      const response = await deletePlant(id, url);
      const newArr = plants.filter((plant) => plant._id !== response.data._id);
      setPlants(newArr);
      toggleModal();
    } else {
      await updatePlant(plant, url);
      getPlants({ owner: props.user._id });
      toggleModal();
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleDelete = (plant) => {
    setIsDelete(true);
    setPatchPlant(plant);
    toggleModal();
  };
  const handlePatch = (plant) => {
    setIsDelete(false);
    setPatchPlant(plant);
    toggleModal();
  };

  const getPlantCard = (plantObj) => {
    return (
      <Plant
        plant={plantObj}
        handleDelete={handleDelete}
        handlePatch={handlePatch}
        loggedInStatus={props.isLoggedIn}
      />
    );
  };

  return (
    <main className={"container"}>
      {props.isLoggedIn ? (
        <h1>Explore your plants</h1>
      ) : (
        <h1>Explore all plants</h1>
      )}

      <section className={"grid-cards"}>
        {plants.map((plant) => getPlantCard(plant))}
      </section>

      {showModal && (
        <section
          className={"modal"}
          isDelete={isDelete}
          patchPlant={patchPlant}
          patchQuery={patchQuery}
          toggleModal={toggleModal}
        ></section>
      )}
    </main>
  );
};

export default Home;
