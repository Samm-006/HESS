import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { FaUser, FaLock } from "react-icons/fa";

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(null); 

        try {
            const response = await axios.get("http://localhost:8000/api/students/"); 
            const students = response.data;

            const user = students.find(
                (student) => student.email === email && student.password === password
            );

            if (user) {
                alert(`Login successful: Welcome ${user.name}`);
                window.location.href = "/student-dashboard"; 
            } else {
                setError("Invalid email or password");
            }
        } catch (err) {
            setError("Failed to connect to the server. Please try again.");
        }
    };

    return (
        <div className="formContainer">
            <h2>CSRS Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="Email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUser className='icon' />
                </div>
                <div className="Password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon1' />
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="loginBtn">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
