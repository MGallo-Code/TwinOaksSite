import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    // Create React hooks for each field
    const [email, setEmail] = useState("");
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
    }, /* Call once */ [navigate]);

    // Called on form submit
    const logIn = async () => {
        // Print all info to screen
        console.warn(`${email}, ${password}`);
        // Send post request with form data, save result
        let result = await fetch("http://localhost:5001/login", {
            method:"post",
            body: JSON.stringify({ email, password }),
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
        navigate("/");
    }
    return (
    <main>
        <form className="login-form">
            <fieldset>
                <legend>Login</legend>
                <p>
                    <label htmlFor="email">Email</label>
                    {/* Set variable's value each time field changes */}
                    <input id="email" type="text" value={email} onChange={
                        (e)=>setEmail(e.target.value)
                    }/>
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    {/* Set variable's value each time field changes */}
                    <input id="password" type="password" value={password} onChange={
                        (e)=>setPassword(e.target.value)
                    }/>
                </p>
                {/* Fire logIn function on button click */}
                <button onClick={logIn} type="button">Log In!</button>
            </fieldset>
        </form>
        <p><Link to="/signup">Signup</Link></p>
    </main>
    );
}

export default Login;