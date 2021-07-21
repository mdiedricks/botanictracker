import React, { useState, useEffect } from "react";
import axios from "axios";

const Explore = (props) => {
  const [plants, setPlants] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!props.isLoggedIn) {
      getPlants();
    } else {
      getPlants({ owner: props.user._id });
    }
  }, [props.isLoggedIn, props.user._id]);

  // TODO abstract out to utils with args
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

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const deletePlant = (plant) => {
    setDeleteItem(true);
    toggleModal();
  };
  const editPlant = (plant) => {
    setDeleteItem(false);
    toggleModal();
  };

  const plantsList = plants.map((plant) => (
    <div key={plant._id} className="card">
      <h3>{plant.name}</h3>
      <p>{plant.species}</p>
      <p>{plant.age}</p>
      <button onClick={() => deletePlant(plant)}>x</button>
      <button onClick={() => editPlant(plant)}>e</button>
    </div>
  ));

  return (
    <main className={"container"}>
      <section className="hero">
        <h1>"Track your plants!"</h1>
      </section>

      <section className="hero">
        <h3>Your plants</h3>
        <div className="plants">
          <ul>{plantsList}</ul>
        </div>
      </section>
      <section className={"modal"} deleteItem={deleteItem}></section>
    </main>
  );
};

export default Explore;
