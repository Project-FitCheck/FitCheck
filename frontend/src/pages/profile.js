import React from 'react';
import Switch from '@mui/material/Switch';
import Select from 'react-select';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../styles/profile.css"
import NavBar from '../components/navbar.js';

const options = [
  { value: 'light', label: 'Light (Default)' },
  { value: 'dark', label: 'Dark' },
  { value: 'midnight', label: 'Midnight' }
]

function Profile() {
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
              <td></td>
            </tr>
            <tr>
              <td>Username:</td>
              <td></td>
            </tr>
            <tr>
              <td>DOB:</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="edit">
        <button className="editButton">Edit Model</button>
        <Popup trigger={<button className="password">Change Password</button>}
          modal nested> {
            close => (
              <div className="modal">
                <div className="oldPass">
                  <h1>Old Password</h1>
                </div>
                <div className="newPass">
                  <h1>New Password</h1>
                </div>
                <div>
                  <button onclick={() => close()}>Submit</button>
                </div>
              </div>
            )
          }
        </Popup>
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
    </div>

  );
}

export default Profile;