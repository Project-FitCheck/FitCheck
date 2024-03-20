import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/user/login", {
                username: username,
                password: password,
            });
            if (response.status === 500) {
                return;
            }
            console.log("User logged in successfully:");
            // Optionally reset the form fields after successful submission
            setUsername("");
            setPassword("");

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userId", response.data.userId);
            navigate("/closet");
        } catch (err) {
            console.error("Error submitting user data:", err);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="signup">
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default Login;