import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import axios from 'axios';

import "../styles/change_pw.css";

function ChangePassword() {

    const navigate = useNavigate();

    const [oldPW, setOldPW] = useState('');
    const [newPW, setNewPW] = useState('');
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setError('');
        const { name, value } = e.target;

        if (name === "oldPW") {
            setOldPW(value);
        } else if (name === "newPW") {
            setNewPW(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userid = window.localStorage.getItem("userId");
            await axios.put("https://fitcheck-backend-7mo5.onrender.com/user/update", { userid, fieldToBeUpdated: "password", updatedValue: newPW, oldValue: oldPW });
            //await axios.put("http://localhost:3001/user/update", { userid, fieldToBeUpdated: "password", updatedValue: newPW, oldValue: oldPW });
            setShowPopup(true);
        } catch (error) {
            console.error("Error getting user data: ", error)
            setError("Incorrect Old Password");
        }

    };

    const handleGoBack = () => {
        navigate("/profile");
    }

    return (

        <div className="changePW">

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

                {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

                <div className="buttons">
                    <button type="submit" className="submitBtn">Submit</button>
                    <button type="button" className="goBackBtn" onClick={handleGoBack}>Go back</button>
                </div>
            </form>

            <Popup open={showPopup} closeOnDocumentClick onClose={() => showPopup(false)}>
                <div className="messagePopup">
                    <h2>Password Changed</h2>
                    <p>Your password has been successfully changed.</p>
                    <button className="closeBtn" onClick={handleGoBack}>Close</button>
                </div>
            </Popup>

        </div>
    );
}

export default ChangePassword;