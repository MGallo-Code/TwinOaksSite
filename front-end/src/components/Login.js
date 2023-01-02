import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
    <main>
        <h1>Login</h1>

        <p><Link to="/signup">Signup</Link></p>
    </main>
    );
}

export default Login;