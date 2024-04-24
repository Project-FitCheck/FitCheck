import React from 'react';
import '../styles/ModelNav.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function ModelNav({ props }) {
	if (props.mode === "edit") {
		return (<div className='ModelNav'>
			<Button component={Link} to={"/model"} className='navBack'>&#60;</Button>
			<h1>Edit Model</h1>
			<Button component={Link} to={"/toBeMade"} className='addFromCloset'><img src="/icons/icons8-hanger-48.png" alt="Add Clothes to Model"></img></Button>
		</div>);
	} else if (props.mode === "view") {
		return (<div className='ModelNav'>
			<Button component={Link} to={"/model/edit"} className='editModel'><img src="/icons/icons8-edit.svg" alt="Edit Model"></img></Button>
			<h1>Your Model</h1>
			<Button component={Link} to={"/toBeMade"} className='addFromCloset'><img src="/icons/icons8-hanger-48.png" alt="Add Clothes to Model"></img></Button>
		</div>);
	} else if (props.mode === "create") {
		return (<div className='ModelNav' style={{ width: "100%" }}>
			<h1>Create Model</h1>
		</div>);
	}
}

export default ModelNav;