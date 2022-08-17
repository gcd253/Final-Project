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
        <div className="h-full flex flex-col justify-center items-center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="shadow-xl flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-2xl border-red-400 border-b-4 border-t-4" >
                <label className="font-medium mt-2 mb-1" htmlFor="username">Username:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    placeholder="Username"
                    type="text"
                    id="username"
                    ref={userRef}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label className="font-medium mt-2 mb-1" htmlFor="password">Password:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    autoComplete="on"
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="duration-500 hover:text-gray-100 m-4 bg-gray-100 pl-6 pr-6 pt-2 pb-2 rounded-full hover:bg-red-400 hover:scale-[1.02]" type="submit">Submit</button>
                <p className="text-xs italic font-semibold mt-2 mb-2" >Don't have an account?
                    <button className="italic font-semibold duration-200 hover:text-red-500 text-xs hover:scale-[1.03] ml-1" onClick={navigateSignup} >
                        Sign up
                    </button>
                </p>
            </form>

        </div>
    );
}

export default Login