import React from 'react';
import '../styles/Model.css';
import ModelNav from '../components/ModelNav';
import ModelViewer from '../components/model_viewer';

function Model() {
	return (<div className='MainPage'>
		<ModelNav />
		<ModelViewer />
	</div>);
}

export default Model;