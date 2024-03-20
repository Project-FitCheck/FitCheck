import React from 'react';
import './styles/index.css';
import './styles/App.css';

import './styles/NavBar.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from './components/navbar.js';

import Signup from './pages/signup';
import Login from './pages/login';
import Profile from "./pages/profile";
import Model from "./pages/model"
import CreateModel from './pages/create_model';
import EditModel from './pages/edit_model.js';

import Closet from './pages/closet';
import Outfits from './pages/locker';
import AddClothing from './pages/add_clothing';

import ToBeMade from './pages/toBeMade';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/model/create' element={<CreateModel />} />
          <Route path='/closet' element={<Closet />} />
          <Route path='/closet/add' element={<AddClothing />} />
<<<<<<< Updated upstream
          <Route path='/locker' element={<Outfits />} />
          <Route path='/model/edit' element={<EditModel />} />
          <Route path='/profile' element={<Profile />} />
=======
          <Route path='/locker' element={<Outfits />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/model' element={<Model />} />
          <Route path='/model/edit' element={<ToBeMade />} />
          <Route path='/model/create' element={<CreateModel />} />
          <Route path='/toBeMade' element={<ToBeMade />} />
          <Route path='/' element={<Navigate to="/signup" />} />

>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;