import React from 'react';
import Switch from '@mui/material/Switch';
import Select from 'react-select';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const options = [
  {value: 'light', label: 'Light (Default)'},
  {value: 'dark', label: 'Dark'},
  {value: 'midnight', label: 'Midnight'}
]

function App() {
  return (
    <>
    <div class="navbar">
      <button>Home</button>
      <button>Model</button>
      <button>Search</button>
      <button>Profile</button>
    </div>

    <div className="settings">
      <h1>SETTINGS</h1>
    </div>

    <div className="account">
      <h1>ACCOUNT INFORMATION</h1>
    </div>

    <div className="profileImg">
      <p>Profile picture goes here</p>
    </div>

    <div className="info">
      <table>
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
      </table>
    </div>

    <div className="edit">
        <button class="editButton">Edit Model</button>
        <Popup trigger= {<button class="password">Change Password</button>}
        modal nested> { 
          close => (
            <div class="modal">
              <div class="oldPass">
                Old Password
              </div>
              <div class="newPass">
                New Password
              </div>
              <div>
                <button onclick = {() => close()}>Submit</button>
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

    </>
  );
}

export default App;
