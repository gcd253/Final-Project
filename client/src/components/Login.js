import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    function handleLoginFormChange(e) {
        const name = e.target.name
        const value = e.target.value
        setLoginDetails({
            ...loginDetails,
            [name]: value,
        })
        console.log(loginDetails)
    }

    function handleLogin(e) {
        e.preventDefault()
    }

    function navigateSignup() {
        navigate('/signup')
    }

    return (
        <div className="bg-gray-200">
            <form onSubmit={(e) => handleLogin(e)} >
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    onChange={handleLoginFormChange}
                    value={loginDetails.username}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    autoComplete="on"
                    onChange={handleLoginFormChange}
                    value={loginDetails.password}
                />

                <button className="duration-200 hover:text-red-500" type="submit" value="Post">
                    Login
                </button>
            </form>
            <button className="duration-200 hover:text-red-500 text-xs hover:scale-[1.02] " onClick={navigateSignup} >
                Don't have an account? Sign up
            </button>
        </div>
    )
}

export default Login