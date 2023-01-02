import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    // Create React hooks for each field
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Used to redirect browser page (Usage: navigate("link"))
    const navigate = useNavigate();

    // Check for authentication
    useEffect(() => {
        const auth = localStorage.getItem("user");
        // If authenticated, return to home page
        if (auth)
        {
            navigate("/");
        }
    }, /* Call once */ []);

    // Called on form submit
    const collectData = async () => {
        // Print all info to screen
        console.warn(`${firstName}, ${lastName}, ${email}, ${username}, ${password}`);
        // Send post request with form data, save result
        let result = await fetch("http://localhost:5001/register", {
            method:"post",
            body: JSON.stringify({ firstName, lastName, 
                                  email, username, password }),
            headers:{
                "Content-Type": "application/json"
            }
        });
        // Convert
        result = await result.json();
        // Print to user
        console.warn(result);
        // Add user to local storage
        localStorage.setItem("user", JSON.stringify(result));
        // Redirect user to main page
        navigate('/');
    }

    return (
        <form className="signup-form">
            <fieldset>
                <legend>Register</legend>
                <p>
                    <label htmlFor="firstName">First Name</label>
                    {/* Set variable's value each time field changes */}
                    <input id="firstName" value={firstName} onChange={
                        (e)=>setfirstName(e.target.value)
                    }/>
                </p>
                <p>
                    <label htmlFor="lastName">Last Name</label>
                    {/* Set variable's value each time field changes */}
                    <input id="lastName" value={lastName} onChange={
                        (e)=>setlastName(e.target.value)
                    }/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    {/* Set variable's value each time field changes */}
                    <input id="email" type="text" value={email} onChange={
                        (e)=>setEmail(e.target.value)
                    }/>
                </p>
                <p>
                    <label htmlFor="username">Username</label>
                    {/* Set variable's value each time field changes */}
                    <input id="username" type="text" value={username} onChange={
                        (e)=>setUsername(e.target.value)
                    }/>
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    {/* Set variable's value each time field changes */}
                    <input id="password" type="password" value={password} onChange={
                        (e)=>setPassword(e.target.value)
                    }/>
                </p>
                {/* Fire collectData function on button click */}
                <button onClick={collectData} type="button">Sign Up!</button>
            </fieldset>
        </form>
    )
}

export default Signup;