import React from 'react';
import 'reactjs-popup/dist/index.css';
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
