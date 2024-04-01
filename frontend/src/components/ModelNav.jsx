import React from 'react';
import '../styles/ModelNav.css';

function ModelNav({ props }) {
	if (props.mode === "edit") {
		console.log("edit mode");
		return (<div className='ModelNav'>
			<div className='ModelNavButtons'>
				<a href="/model"><button className='addClothes'>&#60;</button></a>
			</div>
			<h1>Edit Model</h1>
			<div className="addToCloset">
				<a href="/toBeMade"><button className='searchButton'>ClstAdd</button></a>
			</div>
		</div>);
	} else if (props.mode === "view") {
		console.log("view mode");
		return (<div className='ModelNav'>
			<div className='ModelNavButtons'>
				<a href="/model/edit"><button className='editClothes'>Edit</button></a>
			</div>
			<h1>Your Model</h1>
			<div className="addToCloset">
				<a href="/toBeMade"><button className='searchButton'>ClstAdd</button></a>
			</div>
		</div>);
	}
}

export default ModelNav;