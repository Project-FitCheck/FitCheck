import React from 'react';
import './index.css';
import './App.css';
import './CSS/NavBar.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from './components/navbar.js';

import Profile from "./pages/profile";
import Closet from './pages/closet';
import Outfits from './pages/locker';
import AddClothing from './pages/add_clothing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/closet' element={<Closet />} />
          <Route path='/closet/add' element={<AddClothing />} />
          <Route path='/model/edit' element={<></>} />
          <Route path='/locker' element={<Outfits />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Navigate to="/closet"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;