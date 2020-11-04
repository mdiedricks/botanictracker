import React from 'react'
import { NavLink} from 'react-router-dom';
import '../App.css';

export default function header() {
    return (
        <div>
            <h4>
                Botanic Tracker
            </h4>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/newplant">Create</NavLink>
            </nav>
        </div>
    )
}
