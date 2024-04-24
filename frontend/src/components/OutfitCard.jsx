import React from 'react';
import { useState } from 'react';
import OutfitModal from './OutfitModal.jsx';
import '../styles/OutfitCard.css';

const OutfitCard = ({id, fitName, pic, description}) => {

	const [showModal, setShowModal] = useState(false);
	const handleClose = () => {setShowModal(false)};

	return (
		<>
			<div className='OutfitCard' style={{overflow: "hidden"}} onClick={() => setShowModal(true)}>
				{		console.log(fitName)}
				<img src={pic} width="350px" alt="TestImage" />
				<p>{fitName}</p>
			</div>
			{showModal && <OutfitModal id={id} fitName={fitName} pic={pic} description={description} handleClose={handleClose}/>}
		</>
	)
}

export default OutfitCard;