import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [signupDetails, setSignupDetails] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    const navigate = useNavigate();

    function handleSignupFormChange(e) {
        const name = e.target.name
        const value = e.target.value
        setSignupDetails({
            ...signupDetails,
            [name]: value,
        })
        console.log(signupDetails)
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                body: JSON.stringify({
                    signupDetails
                })
            }
        })
            .then(res => res.json())
            .then(created => console.log(created))
            .catch(error => console.error(error));
    }

    function navigateLogin() {
        navigate('/login')
    }

    return (
        <div className="bg-gray-200">
            <form onSubmit={(e) => handleSubmit(e)} >
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    onChange={handleSignupFormChange}
                    value={signupDetails.username}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleSignupFormChange}
                    value={signupDetails.email}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    autoComplete="on"
                    onChange={handleSignupFormChange}
                    value={signupDetails.password}
                />

                <label>Confirm password:</label>
                <input
                    type="password"
                    name="passwordConfirmation"
                    autoComplete="on"
                    onChange={handleSignupFormChange}
                    value={signupDetails.passwordConfirmation}
                />

                <label>Avatar:</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Image(s)"
                />
                <button className="duration-200 hover:text-red-500" type="submit" value="Post">
                    Sign Up
                </button>
            </form>
            <button className="duration-200 hover:text-red-500 text-xs hover:scale-[1.02]" onClick={navigateLogin} >
                Already have an account? Log in
            </button>
        </div>
    )
}

export default Signup