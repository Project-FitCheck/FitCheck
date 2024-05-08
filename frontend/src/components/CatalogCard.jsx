import React from 'react';
import { useState } from 'react';
import CatalogModal from './CatalogModal.jsx';
import '../styles/ClothesCard.css';

const CatalogCard = ({ id, itemName, gender, pic, description, color, type, style }) => {

	const [showModal, setShowModal] = useState(false);
	const handleClose = () => { setShowModal(false) };

	return (
		<>
			<div className='ClothesCard' onClick={() => setShowModal(true)}>
				<div className="picDiv" dangerouslySetInnerHTML={{ __html: pic }}></div>
				<p>{itemName}</p>
			</div>
			{showModal && <CatalogModal id={id} itemName={itemName} gender={gender} pic={pic} description={description} color={color} style={style} type={type} handleClose={handleClose} />}
		</>
	)
}

export default CatalogCard;