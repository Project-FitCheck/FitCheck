import React from 'react';
import { useState } from 'react';
import ClosetModal from './ClosetModal.jsx';
import '../styles/ClothesCard.css';

const ClothesCard = ({ id, itemName, gender, pic, description, color, type, style }) => {

	const [showModal, setShowModal] = useState(false);
	const handleClose = () => { setShowModal(false) };

	return (
		<>
			<div className='ClothesCard' onClick={() => setShowModal(true)}>
				<div className='picDiv' dangerouslySetInnerHTML={{ __html: pic }}></div>
				<p>{itemName}</p>
			</div>
			{showModal && <ClosetModal id={id} itemName={itemName} gender={gender} pic={pic} description={description} color={color} style={style} type={type} handleClose={handleClose} />}
		</>
	)
}

export default ClothesCard;