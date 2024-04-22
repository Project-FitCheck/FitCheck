import React from 'react';
import { useState } from 'react';
import ClosetModal from './ClosetModal.jsx';
import '../styles/ClothesCard.css';

const ClothesCard = ({id, itemName, pic, description, color, type, style}) => {

	const [showModal, setShowModal] = useState(false);
	const handleClose = () => {setShowModal(false)};

	return (
		<>
			<div className='ClothesCard' onClick={() => setShowModal(true)}>
				<img src={pic} alt="TestImage" />
				<p>{itemName}</p>
			</div>
			{showModal && <ClosetModal id={id} itemName={itemName} pic={pic} description={description} color={color} style={style} type={type} handleClose={handleClose}/>}
		</>
	)
}

export default ClothesCard;