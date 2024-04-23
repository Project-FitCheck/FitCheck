import React from "react";
import PageNav from '../components/PageNav.jsx';
import Add from '../components/Add.jsx';
import NavBar from '../components/navbar.js';

function AddClothing() {
    return (
        <div className='MainPage'>
            <NavBar page="home"/>
            <PageNav page={'clothes'} />
            <Add />
        </div>)
}

export default AddClothing;