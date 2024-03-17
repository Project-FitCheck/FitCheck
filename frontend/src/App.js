import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from './components/navbar';

import Profile from "./pages/profile";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/closet' element={<></>} />
          <Route path='/closet/add' element={<></>} />
          <Route path='/model/edit' element={<></>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Navigate to="/closet"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;