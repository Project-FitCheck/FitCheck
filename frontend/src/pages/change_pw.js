import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/change_pw.css";

function ChangePassword() {

    const navigate = useNavigate();

    const [oldPW, setOldPW] = useState('');
    const [newPW, setNewPW] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setError('');
        const { name, value } = e.target;

        if (name === "oldPW") {
            setOldPW(value);
        } else if (name === "newPW") {
            setNewPW(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (oldPW === "currentPasswordFromLocalStorage") {
            window.localStorage.setItem("password", newPW);
        } else {
            setError("Incorrect old password. Please try again.");
        }
    };

    const handleGoBack = () => {
        navigate("/profile");
    }

    return (

        <div>
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <div className="oldPW">
                    <label>Old Password: </label>
                    <input type="password" name="oldPW" value={oldPW} onChange={handleChange} />
                </div>
                <div className="newPW">
                    <label>New Password: </label>
                    <input type="password" name="newPW" value={newPW} onChange={handleChange} />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <div className="buttons">
                    <button type="submit" className="submit">Submit</button>
                    <button type="button" className="goBack" onClick={handleGoBack}>Go back</button>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;