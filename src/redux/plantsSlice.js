import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlants, createPlant } from "../utils/plants";

export const getPlantsAsync = createAsyncThunk(
  "plants/getPlantsAsync",
  async () => {
    console.log("Thunk :: gettings plants");
    const res = await getPlants({ _id: "" });
    console.log(res);
    if (!res.msg) {
      const plants = res;
      return { plants };
    } else {
      console.log("res is NOT ok");
      return { res };
    }
  }
);
export const addPlantAsync = createAsyncThunk(
  "plants/addPlantAsync",
  async (payload) => {
    console.log("Thunk :: creating plant");
    const res = await createPlant({
      name: payload.name,
      species: payload.species,
      age: payload.age,
    });
    if (!res.msg) {
      const plant = res;
      return { plant };
    } else {
      return { res };
    }
  }
);
export const deletePlantAsync = createAsyncThunk(
  "/plants/deletePlantAsync",
  async () => {}
);

const initialState = [];

const plantSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    addPlant: (state, action) => {
      const newPlant = {
        _id: action.payload._id,
        name: action.payload.name,
        species: action.payload.species,
        age: action.payload.age,
      };
      state.push(newPlant);
    },
    updatePlantName: (state, action) => {
      const index = state.findIndex((todo) => {
        return todo._id === action.payload._id;
      });
      state[index].name = action.payload.name;
    },
    updatePlantSpecies: (state, action) => {
      const index = state.findIndex((todo) => {
        return todo._id === action.payload._id;
      });
      state[index].species = action.payload.species;
    },
    updatePlantAge: (state, action) => {
      const index = state.findIndex((todo) => {
        return todo._id === action.payload._id;
      });
      state[index].age = action.payload.age;
    },
    deletePlant: (state, action) => {
      state.filter((plant) => plant._id !== action.payload._id);
    },
  },
  extraReducers: {
    [getPlantsAsync.fulfilled]: (state, action) => {
      console.log("Fetched data success");
      return action.payload.plants;
    },
    [addPlantAsync.fulfilled]: (state, action) => {
      console.log("Plant created");
      state.push(action.payload.plant);
    },
  },
});

export const {
  addPlant,
  updatePlantName,
  updatePlantSpecies,
  updatePlantAge,
  deletePlant,
} = plantSlice.actions;

export default plantSlice.reducer;
