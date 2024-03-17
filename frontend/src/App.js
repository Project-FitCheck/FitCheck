import React from 'react';
import './styles/navigation.css';
import './styles/index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Signup from './pages/signup';
import Login from './pages/login';
import CreateModel from './pages/create_model';

import NavBar from './components/navbar.js';

import Closet from './pages/closet';
import Outfits from './pages/locker';
import AddClothing from './pages/add_clothing';

import EditModel from "./pages/edit_model";

import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/closet' element={<Closet />} />
          <Route path='/closet/add' element={<AddClothing />} />
          <Route path='/model/edit' element={<EditModel/>} />
          <Route path='/locker' element={<Outfits />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/model/create' element={<CreateModel />} />
          <Route path='/' element={<Navigate to="/signup" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;