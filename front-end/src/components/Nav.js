import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    // Check for user auth
    const auth = localStorage.getItem("user");
    // Navigate hook
    const navigate = useNavigate();
    // Log out function
    const logout = () => {
        // Clear user info from local storage
        localStorage.clear();
        navigate("/");
    }
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                {
                // Change available links based on auth
                auth ? <>
                    <li><Link to="/add-project">Add Project</Link></li>
                    <li><Link to="/update-project">Update Project</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    {/* Logout on click */}
                    <li><Link to="/" onClick = {logout}>Logout</Link></li>
                </> :
                    <li><Link to="/signup">Signup</Link></li>
                }
            </ul>
        </nav>
    )
}

export default Nav;