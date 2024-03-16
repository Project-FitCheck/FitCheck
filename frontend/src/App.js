import React from 'react';
import Profile from "./pages/profile";
import './index.css';
import NavBar from './components/navbar';

function App() {
  return (

    <div className="App">
      <NavBar />
      <Profile />
    </div>
    
  );
}

export default App;
