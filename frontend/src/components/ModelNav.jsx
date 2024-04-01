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
				<a href="/toBeMade"><button className='searchButton'><img src="/icons/icons8-hanger-48.png" alt=""></img></button></a>
			</div>
		</div>);
	} else if (props.mode === "view") {
		console.log("view mode");
		return (<div className='ModelNav'>
			<div className='ModelNavButtons'>
				<a href="/model/edit"><button className='editClothes'><img src="/icons/icons8-edit.svg" alt=""></img></button></a>
			</div>
			<h1>Your Model</h1>
			<div className="addToCloset">
				<a href="/toBeMade"><button className='searchButton'><img src="/icons/icons8-hanger-48.png" alt=""></img></button></a>
			</div>
		</div>);
	}
}

export default ModelNav;