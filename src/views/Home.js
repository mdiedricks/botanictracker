import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlantsAsync } from "../redux/plantsSlice";
import Plant from "../components/Plant";

const Home = () => {
  const user = useSelector((state) => state.user);
  const plants = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlantsAsync());
  }, [dispatch]);

  const getPlantCard = (plant) => {
    return <Plant key={plant._id} plant={plant} />;
  };

  return (
    <main className={"container"}>
      {user.name ? <h1>Explore your plants</h1> : <h1>Explore all plants</h1>}

      <section className={"grid-cards"}>
        {plants.length === 0 && <p>Loading...</p>}
        {plants.length > 0 && plants.map((plant) => getPlantCard(plant))}
      </section>
    </main>
  );
};

export default Home;
