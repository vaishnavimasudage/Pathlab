import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [errorMessage, setErrorMessage] = useState();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    function handleInput(event) {
        setLoginData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function login(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/login', loginData)
            .then((response) => {
                if (response.data.status) {
                    sessionStorage.setItem('customerId', response.data.customerId);
                    sessionStorage.setItem('name', response.data.name);
                    navigate('/view'); // Use navigate to navigate to the "/view" page after successful login
                } else {
                    setErrorMessage(response.data.messageIfAny);
                }
            });
    }

    return (
        <div className="login">
            {errorMessage && <h1>{errorMessage}</h1>}
            <form onSubmit={login}>
                <h1>Login</h1>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={handleInput} />
                </div>
                <button className="btn btn-primary">Login</button>
                {/* No need for Link for the "View" button */}
                {/*<button className="btn btn-secondary" type="button" onClick={() => navigate('/view')}>
                    View
    </button>*/}
            </form>
        </div>
    );
}

export default Login;

