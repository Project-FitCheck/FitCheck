import React/* , {useState} */ from 'react';
import '../styles/Model.css';
import ModelNav from '../components/ModelNav';
import ModelViewer from '../components/model_viewer';
import NavBar from '../components/navbar.js';


function Model() {
	//const [modelData, setModelData] = useState({gender: "", head: "", torso: "", leftArm: "", righttArm: "", legs: "", feet: "", fullBody: ""});
	return (<div className='MainPage'>
		<div className='Model'>
			<NavBar />
			<ModelNav props={{ mode: "view" }} />
			<div className='viewModel'>
				{/*<div className='head'>
				<svg class="chevron-right" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
				</svg>
				<svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="chevron-left" style={{transform:"rotate(180deg)"}}>
					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
				</svg>
				</div>
				<div className='torso'>
				<svg class="chevron-right" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
				</svg>
				<svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="chevron-left" style={{transform:"rotate(180deg)"}}>
					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
				</svg>
				</div>
				<div className='legs'>
				<svg class="chevron-right" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
				</svg>
				<svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="chevron-left" style={{transform:"rotate(180deg)"}}>
					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
				</svg>
				</div>
				<div className='feet'>
				<svg class="chevron-right" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
				</svg>
				<svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="chevron-left" style={{transform:"rotate(180deg)"}}>
					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
				</svg>
</div>*/}
				
				<ModelViewer props={{}} />
				
			</div>
		</div>
	</div>);
}

export default Model;