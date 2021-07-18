import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Home = (props) => {
  const [plants, setPlants] = useState([]);

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

  const deletePlant = (id) => {
    //TODO show delete modal
    console.log(id);
  };
  const editPlant = (id) => {
    //TODO show edit modal
    console.log(id);
  };

  const plantsList = plants.map((plant) => (
    <div key={plant._id} className="card">
      <h3>{plant.name}</h3>
      <p>{plant.species}</p>
      <p>{plant.age}</p>
      <button onClick={() => deletePlant(plant._id)}>x</button>
      <button onClick={() => editPlant(plant._id)}>e</button>
    </div>
  ));

  return (
    <div>
      <section className="hero">
        <h1>"Track your plants!"</h1>
      </section>

      <section className="hero">
        <h3>Your plants</h3>
        <div className="plants">
          <ul>{plantsList}</ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
