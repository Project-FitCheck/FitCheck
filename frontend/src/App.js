import React from 'react';
import './styles/index.css';
import './CSS/NavBar.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from './components/navbar.js';

import Signup from './pages/signup.js';
import Login from './pages/login.js';
import Profile from "./pages/profile.js";
import EditModel from "./pages/edit_model.js";

import Closet from './pages/closet.js';
import Outfits from './pages/locker.js';
import AddClothing from './pages/add_clothing.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to="/closet" />} />
          <Route path='/closet' element={<></>} />
          <Route path='/closet/add' element={<></>} />
          <Route path='/model/edit' element={<EditModel />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;