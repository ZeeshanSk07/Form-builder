import React, { useState } from "react";
import "./SignUp.css";
import arrow from "../assets/login/arrow_back.png";
import semicircle from "../assets/login/Ellipse 1.png";
import vercircle from "../assets/login/Ellipse 2.png";
import triangle from "../assets/login/Group 2 (1).png";
import { useNavigate } from "react-router-dom";
import { Signup } from "../api/User";
import toast, { Toaster } from 'react-hot-toast';
import {defaultTheme} from '../api/Theme';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    

    const handleSignup = async () => {
        const newErrors = {};
        if (!username) newErrors.username = "Username is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";
        if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
        if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        try {
            const response = await Signup(username, email, password);
            
            if (response.status === 201) {
                toast.success('User created successfully!');
                setTimeout(() => {
                    navigate('/login');
                }, 1300); 


                setTimeout(async () => {
                    const user = response.data.id;
                    const theme = "dark";
                    
                    const resp = await defaultTheme(theme, user);
                    if (resp.status === 201) {
                        console.log('Theme response:', resp);
                    } else {
                        console.log('Theme error', resp.error);
                    }
                }, 0);
            } else {
                console.error('Error creating user: ' + (response.data.message || 'Unknown error'));
            }

           



        } catch (error) {
            console.error('Signup error:', error);
            toast.error('Error creating user: ' + error.message);
        }
    };

    
    };

    return (
        <div className="signup">
            <img onClick={() => navigate(-1)} src={arrow} alt="Back arrow" />
            
            <div className="middle">
                <img src={triangle} alt="Triangle" />
                <div className="form">
                    <label htmlFor="username">Username</label>
                    <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" />
                    <span className="error">{errors.username}</span>

                    <label htmlFor="email">Email</label>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" /><span className="error">{errors.email}</span>

                    <label htmlFor="password">Password</label>
                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********" /> <span className="error">{errors.password}</span>

                    <label htmlFor="confirm">Confirm Password</label>
                    <input required type="password" placeholder="" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <span className="error">{errors.confirmPassword}</span>

                    <button onClick={handleSignup}>Sign Up</button>
                    <Toaster position="top-center" reverseOrder={false} />
                    <p>
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
                <img src={vercircle} alt="Vertical circle" />
            </div>
            <div className="bottom">
                <img src={semicircle} alt="Semicircle" />
            </div>
        </div>
    );
}

export default SignUp;
