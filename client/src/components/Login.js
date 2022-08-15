import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

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
    }

    function navigateSignup() {
        navigate('/signup')
    }

    return (
        <div className="bg-gray-200">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    placeholder="Username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    autoComplete="on"
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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