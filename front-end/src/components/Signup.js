import React, {useState} from 'react';

const Signup = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPwd] = useState("");
    const collectData = () => {
        console.warn(fName, lName, email, password);
    }

    return (
        <form className="signup-form">
            <fieldset>
                <legend>Register</legend>
                <p>
                    <label htmlFor="fName">First Name</label>
                    <input id="fName" value={fName} onChange={
                        (e)=>setFName(e.target.value)
                    }/>
                </p>
                <p>
                    <label htmlFor="lName">Last Name</label>
                    <input id="lName" value={lName} onChange={
                        (e)=>setLName(e.target.value)
                    }/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={email} onChange={
                        (e)=>setEmail(e.target.value)
                    }/>
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={
                        (e)=>setPwd(e.target.value)
                    }/>
                </p>
                <button onClick={collectData} type="button">Sign Up!</button>
            </fieldset>
        </form>
    )
}

export default Signup;