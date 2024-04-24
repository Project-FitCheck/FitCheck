import React from 'react';
import { useState } from 'react';
import OutfitModal from './OutfitModal.jsx';
import '../styles/OutfitCard.css';

const OutfitCard = ({id, fitName, pic, description}) => {

	const [showModal, setShowModal] = useState(false);
	const handleClose = () => {setShowModal(false)};

	return (
		<>
			<div className='OutfitCard' onClick={() => setShowModal(true)}>
				{		console.log(pic.data)}
				<img src={pic.data} alt="TestImage" />
				<p>{fitName}</p>
			</div>
			{showModal && <OutfitModal id={id} fitName={fitName} pic={pic} description={description} handleClose={handleClose}/>}
		</>
	)
}

export default OutfitCard;