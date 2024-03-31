import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import '../styles/Signup.css'

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(firstName, lastName, username, password, email)
        try {
            const response = await axios.post("http://localhost:3001/user/signup", {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                email: email
            });
            if (response.status === 500) {
                return;
            }
            console.log("User data submitted successfully:", {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                email: email
            });
            // Optionally reset the form fields after successful submission
            setFirstName("");
            setLastName("");
            setUsername("");
            setPassword("");
            setEmail("");

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userId", response.data.userId);
            navigate("/model/create");
        } catch (err) {
            console.error("Error submitting user data:", err);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="signup">
            <form onSubmit={onSubmit}>
                <h2>Create Account</h2>
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default Signup;