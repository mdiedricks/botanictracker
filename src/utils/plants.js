import axios from "axios";
let path = "https://botanictracker-api.herokuapp.com/plants";

export const createPlant = async (plantData) => {
  console.log("Function :: creating plant");
  try {
    const res = await axios({
      method: "post",
      url: path,
      data: plantData,
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    if (res.status !== 200) {
      throw new Error(res.data.msg);
    }
    return res;
  } catch (error) {
    return { msg: error.message };
  }
};

export const getPlants = async ({ _id }) => {
  console.log("Function :: getting plants");
  let query = "";
  if (_id) {
    console.log(_id);
    query = "?owner=" + _id;
  }
  try {
    const res = await axios({
      method: "get",
      url: path + query,
      validateStatus: function (status) {
        return status >= 200 && status < 500;
      },
    });
    if (res.status !== 200) {
      throw new Error(res.data.msg);
    }
    return res.data;
  } catch (error) {
    return { msg: error.message };
  }
};

export const updatePlant = async (plant) => {
  console.log("Function :: patching plant");
  try {
    const res = await axios({
      method: "patch",
      url: path + "/" + plant._id,
      data: {
        name: plant.name,
        species: plant.species,
        age: plant.age,
      },
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
    return { msg: error.message };
  }
};

export const deletePlant = async (id) => {
  console.log("Function:: deleting plant");
  try {
    const res = await axios({
      method: "delete",
      url: path + "/" + id,
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    return res;
  } catch (error) {
    return { msg: error.message };
  }
};
