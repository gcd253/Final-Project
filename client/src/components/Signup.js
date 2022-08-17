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
        <div className="h-screen flex flex-col justify-center items-center dark:bg-slate-900">
            <h1 className="dark:text-white" >Sign up</h1>
            <form onSubmit={handleSubmit} className="shadow-xl flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-2xl border-red-400 border-b-4 border-t-4 dark:bg-slate-800 dark:border-slate-600" >
                <label className="font-medium mt-2 mb-1 dark:text-white" htmlFor="username">Username:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3 dark:bg-slate-700 dark:text-slate-400"
                    placeholder="Username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="font-medium mt-2 mb-1 dark:text-white" htmlFor="email">Email:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3 dark:bg-slate-700 dark:text-slate-400"
                    placeholder="Email"
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="font-medium mt-2 mb-1 dark:text-white" htmlFor="password">Password:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3 dark:bg-slate-700 dark:text-slate-400"
                    placeholder="Password"
                    autoComplete="on"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className="font-medium mt-2 mb-1 dark:text-white" htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3 dark:bg-slate-700 dark:text-slate-400"
                    placeholder="Confirm password"
                    autoComplete="on"
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button className="duration-500 hover:text-gray-100 m-4 bg-gray-100 pl-6 pr-6 pt-2 pb-2 rounded-full hover:bg-red-400 hover:scale-[1.02] dark:bg-slate-500 dark:hover:bg-slate-100 dark:text-slate-200 dark:hover:text-slate-800 dark:shadow-xl" type="submit" value="Post">Sign up</button>
                <p className="text-xs italic font-semibold mt-2 mb-2 dark:text-slate-400" >Already have an account?
                    <button className="italic font-semibold duration-200 hover:text-red-500 text-xs hover:scale-[1.03] ml-1 dark:text-slate-400 dark:hover:text-white" onClick={navigateLogin} >
                        Login
                    </button>
                </p>
            </form>


        </div>
    );
}

export default Signup