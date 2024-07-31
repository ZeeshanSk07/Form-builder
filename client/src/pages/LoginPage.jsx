import React, { useState } from "react";
import "./LoginPage.css";
import arrow from "../assets/login/arrow_back.png";
import semicircle from "../assets/login/Ellipse 1.png";
import vercircle from "../assets/login/Ellipse 2.png";
import triangle from "../assets/login/Group 2 (1).png";
import { useNavigate, Link } from "react-router-dom";
import { Login } from '../api/User';
import toast, { Toaster } from 'react-hot-toast';

function LoginPage({currentUser,setCurrentUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    

    const handleLogin = async () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await Login(email, password);
                if (response.status === 200) {
                    setCurrentUser(response.data);
                    localStorage.setItem('token', response.data.token);
                    toast.success('Login successful');
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 1200); 
                } else {
                    toast.error('Invalid email or password');
                }
            } catch (error) {
                toast.error('Error logging in: ' + error.message);
            }
        }
    }

    return (
        <>
            <div className="login">
                <img onClick={() => navigate(-1)} src={arrow} alt="Back arrow" />
                <div className="middles">
                    <img src={triangle} alt="Triangle" />
                    <div className="forms">
                        <label htmlFor="email">Email</label>
                        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                        <span className="error">{errors.email}</span>

                        <label htmlFor="password">Password</label>
                        <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********" />
                        <span className="error">{errors.password}</span>

                        <button onClick={handleLogin}>Log In</button>
                        <Toaster position="top-center" reverseOrder={false} />
                        <p>
                            Don't have an account? <Link to="/signup">Register now</Link>
                        </p>
                    </div>
                    <img src={vercircle} alt="Vertical circle" />
                </div>
                <div className="bottomside">
                    <img src={semicircle} alt="Semicircle" />
                </div>
            </div>
        </>
    );
}

export default LoginPage;
