import React from 'react';
import '../styles/ModelNav.css';

function ModelNav(props) {
	return (<div className='ModelNav'>
		<div className='ModelNavButtons'>
			<a href=".."><button className='addClothes'>&#60;</button></a>
			<a href="/toBeMade"><button className='searchButton'>ClstAdd</button></a>
		</div>
	</div>);
}

export default ModelNav;