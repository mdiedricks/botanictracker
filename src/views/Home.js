import React, { useState, useEffect } from "react";
// import axios from "axios";

const Home = () => {
  const [plants, setPlants] = useState([1, 2, 3, 4, 5, 6, 7]);
  // useEffect(() => {
  //   getPlants();
  // }, []);

  function getPlants() {
    // axios({
    //   method: "get",
    //   url: "http://localhost:9000/plant",
    // })
    //   .then((res) => res.text())
    //   .then((res) => setPlants(res));
  }

  return (
    <div>
      <section className="hero">
        <h1>"Track your plants!"</h1>
      </section>

      <section className="hero">
        <a href="/login">Login</a>
      </section>

      <section className="hero">
        <h3>This weeks weather</h3>
        <div>{plants}</div>
      </section>
    </div>
  );
};

export default Home;
