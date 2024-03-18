// This is deprecated and not needed for now

import React from 'react';
import '../CSS/NavBar.css';
import NavButton from './NavButton';

function NavBar() {
	return <div className='NavBar'>
		<ul>
			<NavButton name={"Home"} link={''}/>
			<NavButton name={"Model"} link={''}/>
			<NavButton name={"Search"} link={''}/>
			<NavButton name={"Profile"} link={''}/>
		</ul>
	</div>
}

export default NavBar;