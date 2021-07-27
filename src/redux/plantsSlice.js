import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlants } from "../utils/plants";

export const getPlantsAsync = createAsyncThunk(
  "plants/getPlantsAsync",
  async () => {
    const res = await getPlants({ _id: "" });
    console.log(res);
    if (res.length) {
      const plants = res;
      return { plants };
    } else {
      console.log("res is NOT ok");
    }
  }
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
      return action.payload.plants;
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
