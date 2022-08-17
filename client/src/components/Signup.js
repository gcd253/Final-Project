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
        navigate('/')
    }

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className="shadow-xl flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-2xl border-red-400 border-b-4 border-t-4" >
                <label className="font-medium mt-2 mb-1" htmlFor="username">Username:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    placeholder="Username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="font-medium mt-2 mb-1" htmlFor="email">Email:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    placeholder="Email"
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="font-medium mt-2 mb-1" htmlFor="password">Password:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    placeholder="Password"
                    autoComplete="on"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className="font-medium mt-2 mb-1" htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    placeholder="Confirm password"
                    autoComplete="on"
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button className="duration-500 hover:text-gray-100 m-4 bg-gray-100 pl-6 pr-6 pt-2 pb-2 rounded-full hover:bg-red-400 hover:scale-[1.02]" type="submit" value="Post">Sign up</button>
                <p className="text-xs italic font-semibold mb-2" >Already have an account?
                    <button className="italic font-semibold duration-200 hover:text-red-500 text-xs hover:scale-[1.03] ml-1" onClick={navigateLogin} >
                        Login
                    </button>
                </p>
            </form>


        </div>
    );
}

export default Signup