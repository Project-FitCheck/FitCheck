import React from 'react';
import './styles/index.css';

import './styles/App.css';
import './styles/Home.css';
import './styles/NavBar.css';


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



import Signup from './pages/signup.js';
import Login from './pages/login.js';
import Profile from "./pages/profile.js";
import EditModel from "./pages/edit_model.js";

import Home from './pages/Home.jsx';
import Profile from "./pages/profile";
import Model from "./pages/model"
import CreateModel from './pages/create_model';
import EditModel from './pages/edit_model.js';


import Closet from './pages/closet.js';
import Outfits from './pages/locker.js';
import AddClothing from './pages/add_clothing.js';

import ToBeMade from './pages/toBeMade';

import ToBeMade from './pages/toBeMade';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Home />} />
          <Route path="/register" element={<Home />} />
          <Route path='/model/create' element={<CreateModel />} />

          <Route path='/closet' element={<Closet />} />
          <Route path='/closet/add' element={<AddClothing />} />
          <Route path='/locker' element={<Outfits />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/search' element={<ToBeMade />} />
          <Route path='/model' element={<Model />} />
          <Route path='/model/edit' element={<EditModel />} />
          <Route path='/model/create' element={<CreateModel />} />
          <Route path='/toBeMade' element={<ToBeMade />} />
          <Route path='/' element={<Navigate to="/signup" />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}


export default App;
