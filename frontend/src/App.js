import React from 'react';
<<<<<<< HEAD
import './styles/index.css';
=======
import './index.css';
>>>>>>> 0d7b7dd (Pages (#26))
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from './components/navbar';

import Signup from './pages/signup';
import Login from './pages/login';
import Profile from "./pages/profile";
<<<<<<< HEAD
<<<<<<< HEAD
import EditModel from "./pages/edit_model";
=======
>>>>>>> 0d7b7dd (Pages (#26))
=======
import CreateModel from './pages/create_model';
>>>>>>> 45f074f (created login page, still needs some more api func (#31))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path='/' element={<Navigate to="/closet" />} />
          <Route path='/closet' element={<></>} />
          <Route path='/closet/add' element={<></>} />
          <Route path='/model/edit' element={<EditModel />} />
          <Route path='/profile' element={<Profile />} />
=======
=======
          <Route path='/signup' element={<Signup />} />
          <Route path="login" element={<Login />} />
>>>>>>> 45f074f (created login page, still needs some more api func (#31))
          <Route path='/closet' element={<></>} />
          <Route path='/closet/add' element={<></>} />
          <Route path='/model/edit' element={<></>} />
          <Route path='/profile' element={<Profile />} />
<<<<<<< HEAD
          <Route path='/' element={<Navigate to="/closet"/>}/>
>>>>>>> 0d7b7dd (Pages (#26))
=======
          <Route path='/model/create' element={<CreateModel />} />
          <Route path='/' element={<Navigate to="/signup" />} />
>>>>>>> 45f074f (created login page, still needs some more api func (#31))
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;