import React from 'react';
import '../styles/ModelNav.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function ModelNav({ props }) {
	if (props.mode === "edit") {
		console.log("edit mode");
		return (<div className='ModelNav'>
			<Button component={Link} to={"/model"} className='navBack'>&#60;</Button>
			<h1>Edit Model</h1>
			<Button component={Link} to={"/toBeMade"} className='addFromCloset'><img src="/icons/icons8-hanger-48.png" alt="Add Clothes to Model"></img></Button>
		</div>);
	} else if (props.mode === "view") {
		console.log("view mode");
		return (<div className='ModelNav'>
			<Button component={Link} to={"/model/edit"} className='editModel'><img src="/icons/icons8-edit.svg" alt="Edit Model"></img></Button>
			<h1>Your Model</h1>
			<Button component={Link} to={"/toBeMade"} className='addFromCloset'><img src="/icons/icons8-hanger-48.png" alt="Add Clothes to Model"></img></Button>
		</div>);
	}
}

export default ModelNav;