import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import '../styles/Signup.css'

export default function Register (props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate()
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(firstName, lastName, username, password, email)
        try {
            const response = await axios.post("https://fitcheck-fg37.onrender.com/user/signup", {
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
    
    return(
        <div className="auth-from-container">
            <h1>FitCheck</h1>
        <form className ="register-form"onSubmit={handleSubmit}>
            <label htmlFor>First name</label>
            <input value ={firstName} onChange ={(e)=> setFirstName(e.target.value)}name="firstname" id="firstname" placeholder="first name"/>

            <label htmlFor>Last name</label>
            <input value ={lastName} onChange ={(e)=> setLastName(e.target.value)}name="lastname" id="lastname" placeholder="last name"/>

            <label htmlFor>username</label>
            <input value ={username} onChange ={(e)=> setUsername(e.target.value)}name="username" id="username" placeholder="username"/>

            <label htmlFor="email"> Email </label>
            <input value={email} onChange ={(e)=> setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
           
            <label htmlFor="password"> Password </label>
            <input value={password} onChange ={(e)=> setPassword(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
            <button type="submit">Create</button>
        </form>
        <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}