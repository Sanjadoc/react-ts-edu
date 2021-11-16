import { NavLink } from 'react-router-dom'
import React from "react";

export const NavBar: React.FC = () => {
    return(
        <nav>
        <div className="nav-wrapper green darken-1 px1">
            <NavLink className="brand-logo" to="/">TodoList</NavLink>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/">List todo</NavLink>
                </li>
                <li>
                    <NavLink to="/info">Info</NavLink>
                </li>
            </ul>
        </div>
        </nav>
    );
}