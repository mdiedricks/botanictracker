import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Newplant = () => {
  const [plantName, setPlantName] = useState("");
  const [plantSpecies, setPlantSpecies] = useState("");
  const [plantAge, setPlantAge] = useState("");
  let history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "post",
      url: `https://botanictracker-api.herokuapp.com/plants/`,
      data: {
        name: plantName,
        species: plantSpecies,
        age: plantAge,
      },
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    console.log(res);
    history.push("/");
  };
  const nameHandler = (e) => {
    setPlantName(e.target.value);
  };
  const speciesHandler = (e) => {
    setPlantSpecies(e.target.value);
  };
  const ageHandler = (e) => {
    setPlantAge(e.target.value);
  };

  return (
    <div>
      <h3>Create a new plant!</h3>
      <form>
        <label>Plant Name</label>
        <input
          type="text"
          name="name"
          value={plantName}
          onChange={nameHandler}
        ></input>
        <label>Species</label>
        <input
          type="text"
          name="species"
          value={plantSpecies}
          onChange={speciesHandler}
        ></input>
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={plantAge}
          onChange={ageHandler}
        ></input>
        <button onClick={submitHandler}>Create</button>
      </form>
    </div>
  );
};

export default Newplant;
