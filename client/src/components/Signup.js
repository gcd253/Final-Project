import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({ onLogin, setUser }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                email,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then((r) => r.json())
            .then((r) => console.log(r))
            .then(fetchForInbox);
    }

    function navigateLogin() {
        navigate('/login')
    }

    function fetchForInbox() {
        fetch("/me").then((response) => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
            }
        });
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
                <label htmlFor="email">Email:</label>
                <input
                    placeholder="Email"
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    placeholder="Password"
                    autoComplete="on"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    placeholder="Confirm password"
                    autoComplete="on"
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button className="duration-200 hover:text-red-500" type="submit" value="Post">Sign up</button>
            </form>
            <button className="duration-200 hover:text-red-500 text-xs hover:scale-[1.02]" onClick={navigateLogin} >
                Already have an account? Log in
            </button>
        </div>
    );
}

export default Signup