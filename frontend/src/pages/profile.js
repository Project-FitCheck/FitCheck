import React, { useEffect, useState } from 'react';
import axios from "axios";

import Switch from '@mui/material/Switch';
import Select from 'react-select';
import 'reactjs-popup/dist/index.css';
import "../styles/profile.css"
import NavBar from '../components/navbar.js';
import { useNavigate } from "react-router-dom"

const options = [
  { value: 'light', label: 'Light (Default)' },
  { value: 'dark', label: 'Dark' },
  { value: 'midnight', label: 'Midnight' }
]

function Profile() {
  const navigate = useNavigate();

  const [UserData, setUserData] = useState("");


  const handleEditModelClick = () => {
    navigate("../model");
  };

  const handleChangePWclick = () => {
    navigate("/change-password");
  };

  useEffect(() => {
    async function getUserData() {
      try {
        const userId = window.localStorage.getItem("userId");
        const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/user/?userId=" + userId);
        setUserData(response.data);

      } catch (error) {
        console.error("Error getting user data: ", error)
      }
    }
    getUserData();
  }, [UserData]);


  return (

    <div className="profile">
      <NavBar />
      <div className="settings">
        <h1>SETTINGS</h1>
      </div>

      <div className="account">
        <h1>ACCOUNT INFORMATION</h1>
      </div>

      <div className="profileImg">
        <p>Profile image goes here</p>
      </div>

      <div className="info">
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{UserData.firstName} {UserData.lastName}</td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>{UserData.username}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{UserData.email}</td>

            </tr>
          </tbody>
        </table>
      </div>

      <div className="edit">
        <button className="editButton" onClick={handleEditModelClick}>Edit Model</button>
        <button className="changePWbutton" onClick={handleChangePWclick}>Change Password</button>
      </div>

      <div className="themes">
        <h2>THEMES</h2>
        <p>Customize the theme of your FitCheck</p>
        <Select options={options} />
      </div>

      <div className="privacy">
        <h2>PRIVACY</h2>
        <p>Make your account public or private. It's public by default.</p>
        <Switch />
      </div>

      <div className="logOut">
        <button className="logOutBtn" onClick={() => { window.localStorage.removeItem("userId"); navigate("/") }}>Logout</button>
      </div>

    </div>

  );
}

export default Profile;