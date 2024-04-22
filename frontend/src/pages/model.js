import React/* , {useState} */ from 'react';
import '../styles/Model.css';
import ModelNav from '../components/ModelNav';
import ModelViewer from '../components/model_viewer';
import NavBar from '../components/navbar.js';


function Model() {
	//const [modelData, setModelData] = useState({gender: "", head: "", torso: "", leftArm: "", righttArm: "", legs: "", feet: "", fullBody: ""});
	return (<div className='MainPage'>
		<div className='Model'>
			<NavBar page="model"/>
			<ModelNav props={{ mode: "view" }} />
			<div className='viewModel'>
				<ModelViewer props={{mode: "view"}} />
			</div>
		</div>
	</div>);
}

export default Model;