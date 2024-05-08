import React, { useEffect, useState } from 'react';
import axios from "axios";

import Switch from '@mui/material/Switch';
import 'reactjs-popup/dist/index.css';
import "../styles/profile.css"
import NavBar from '../components/navbar.js';
import { useNavigate } from "react-router-dom"
import DarkMode from '../components/DarkMode.jsx';

function Profile() {
  const navigate = useNavigate();

  const [UserData, setUserData] = useState("");


  const handleEditModelClick = () => {
    navigate("../model/edit");
  };

  const handleChangePWclick = () => {
    navigate("/change-password");
  };

  useEffect(() => {
    async function getUserData() {
      try {
        const userId = window.localStorage.getItem("userId");
        //const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/user/?userId=" + userId);
        const response = await axios.get("http://localhost:3001/user/?userId=" + userId);
        setUserData(response.data);

      } catch (error) {
        console.error("Error getting user data: ", error)
      }
    }
    getUserData();
  }, [UserData]);


  return (

    <div className="profile">
      <NavBar page="profile" />
      <div className="settings">
        <h1>SETTINGS</h1>
      </div>

      <div className="account">
        <h2>ACCOUNT INFORMATION</h2>
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
        <h3>DARK MODE</h3>
        <p>Toggle this to enable dark mode</p>
        <DarkMode />
      </div>

      <div className="privacy">
        <h3>PRIVATE MODE</h3>
        <p>Toggle this to make your account private</p>
        <Switch />
      </div>

      <div className="logOut">
        <button className="logOutBtn" onClick={() => { window.localStorage.removeItem("userId"); navigate("/") }}>Logout</button>
      </div>

    </div>

  );
}

export default Profile;