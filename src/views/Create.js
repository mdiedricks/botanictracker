import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [plantData, setPlantData] = useState({ name: "", species: "", age: 0 });
  let history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "post",
      url: `https://botanictracker-api.herokuapp.com/plants/`,
      data: plantData,
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    console.log(res);
    history.push("/");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPlantData({ ...plantData, [name]: value });
  };

  return (
    <main className={"container content center"}>
      <form>
        <div className={"form-title"}>
          <h2>Create a plant!</h2>
        </div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          value={plantData.name}
          onChange={changeHandler}
        ></input>
        <label>Species</label>
        <input
          type="text"
          name="species"
          required
          value={plantData.species}
          onChange={changeHandler}
        ></input>
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={plantData.age}
          min="0"
          required
          onChange={changeHandler}
        ></input>
        <button className={"btn--prim btn--lrg"} onClick={submitHandler}>
          Create
        </button>
      </form>
    </main>
  );
};

export default Create;
