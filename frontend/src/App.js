import React from 'react';
import Profile from "./pages/profile";
import './index.css';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/closet' element={<closet />} />
          <Route path='/closet/add' element={<></>} />
          <Route path='/model/edit' element={<model />} />
          <Route path='/profile' element={<Profile />} />
          {/*<Route path='/' element={<></>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
