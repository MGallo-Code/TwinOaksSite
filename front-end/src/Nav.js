import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/add-project">Add Project</Link></li>
                <li><Link to="/update-project">Update Project</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    )
}

export default Nav;