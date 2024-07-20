import React, { useState } from "react";
import "./SignUp.css";
import arrow from "../assets/login/arrow_back.png";
import semicircle from "../assets/login/Ellipse 1.png";
import vercircle from "../assets/login/Ellipse 2.png";
import triangle from "../assets/login/Group 2 (1).png";
import { useNavigate } from "react-router-dom";
import { Signup } from "../api/User";

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await Signup(username, email, password);
            console.log(response);
            if (response.status === 201) {
                alert('User created successfully!');
                navigate('/login');
            } else {
                alert('Error creating user: ' + (response.data.message || 'Unknown error'));
            }
        } catch (error) {
            alert('Error creating user: ' + error.message);
        }
    };

    return (
        <div className="signup">
            <img onClick={() => navigate(-1)} src={arrow} alt="" />
            <div className="middle">
                <img src={triangle} alt="" />
                <div className="form">
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" />

                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********" />

                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" placeholder="" />

                    <button onClick={handleSignup}>Sign Up</button>
                    <p>
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
                <img src={vercircle} alt="" />
            </div>
            <div className="bottom">
                <img src={semicircle} alt="" />
            </div>
        </div>
    );
}

export default SignUp;
