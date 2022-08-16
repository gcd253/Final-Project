import { React, useState, useEffect, useRef, useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

function Login({ onLogin }) {

    const { setAuth } = useAuth();

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        userRef.current.focus();
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => r.json())
            .then((user) => {
                if (user.id) { onLogin(user) }
            }
            );
        navigate("/items")
    }

    function navigateSignup() {
        navigate('/signup')
    }

    return (
        <div className="bg-gray-200">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    placeholder="Username"
                    type="text"
                    id="username"
                    ref={userRef}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    autoComplete="on"
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="duration-200 hover:text-red-500 hover:scale-[1.02]" type="submit">Submit</button>
            </form>
            <button className="duration-200 hover:text-red-500 text-xs hover:scale-[1.02]" onClick={navigateSignup} >
                Don't have an account? Sign up
            </button>
        </div>
    );
}

export default Login