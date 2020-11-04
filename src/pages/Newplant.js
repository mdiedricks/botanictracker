import React, { useState } from 'react';
import axios from 'axios';

function Newplant() {
    const [plantName, setPlantName] = useState('James')
    const [speciesName, setSpeciesName] = useState('Jerk')

    const submitHandler = (e) => {
        axios({
            method: 'post',
            url: `http://localhost:9000/plant`,
            data: {
                name: plantName,
                species: speciesName
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
        // TODO redirect to plants page
    }
    const nameHandler = (e)=>{
        setPlantName(e.target.value)
    }
    const speciesHandler = (e)=>{
        setSpeciesName(e.target.value)
    }

    return (
        <div>
            <h3>Create a new plant!</h3>
            <form onSubmit={submitHandler}>
                <label>Plant Name</label>
                <input type='text' value={plantName} onChange={nameHandler}></input>
                <input type='text' value={speciesName} onChange={speciesHandler}></input>
                <button>Create</button>   
            </form>
            {plantName}
        </div>
    )
}

export default Newplant;