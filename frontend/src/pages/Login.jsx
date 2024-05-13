import React, { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import '../styles/Login.css'

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setError] = useState('');
    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://fitcheck-backend-7mo5.onrender.com/user/login", {
            //const response = await axios.post("http://localhost:3001/user/login", {
                username: username,
                password: password,
            });
            if (response.status === 500) {
                return;
            }
            if (response.status === 404 || response.status === 401) {
                throw Error(response);
            }
            console.log("User logged in successfully:");
            // Optionally reset the form fields after successful submission
            setUsername("");
            setPassword("");

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userId", response.data.userId);
            navigate("/closet");
        } catch (er) {
            setError(er.response.data.message);
            console.error("Error submitting user data:", e);
        }
    }
    return (
        <div className="auth-from-container">
            <img src='/fitcheck_logo_192_v2.png' alt="fitcheck logo"></img>
            <h1>FitCheck</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Username"> Username </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" />

                <label htmlFor="password"> Password </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**********" id="password" name="password" />
                <button type="submit">Login</button>
                <p className="error">{err}</p>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}