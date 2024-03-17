import React from 'react';
<<<<<<< HEAD
import './styles/index.css';
=======
import './index.css';
>>>>>>> 0d7b7dd (Pages (#26))
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from './components/navbar';

import Profile from "./pages/profile";
<<<<<<< HEAD
import EditModel from "./pages/edit_model";
=======
>>>>>>> 0d7b7dd (Pages (#26))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Navigate to="/closet" />} />
          <Route path='/closet' element={<></>} />
          <Route path='/closet/add' element={<></>} />
          <Route path='/model/edit' element={<EditModel />} />
          <Route path='/profile' element={<Profile />} />
=======
          <Route path='/closet' element={<></>} />
          <Route path='/closet/add' element={<></>} />
          <Route path='/model/edit' element={<></>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Navigate to="/closet"/>}/>
>>>>>>> 0d7b7dd (Pages (#26))
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;