import React from 'react';
import axios from "axios";
import '../styles/Modal.css';

const CatalogModal = ({ id, itemName, gender, pic, description, color, type, style, handleClose }) => {
	async function AddToCloset() {
		try {
			const userId = window.localStorage.getItem("userId");
			const clothingItem = {
				productTitle: color + " " + type,
				type: type,
				color: color,
				description: description,
				style: style,
				image: pic,
				//gender: gender
			}
			await axios.post("https://fitcheck-backend-7mo5.onrender.com/closet/add", { userId, clothingItem });
			//await axios.post("http://localhost:3001/closet/add", { userId, clothingItem });
			handleClose();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='ModalBackground'>
			<div className='Modal'>
				<button className="ModalClose" onClick={() => handleClose()}>x</button>
				<div className="ModalMain">
					<div className="ModalImage">
						<div dangerouslySetInnerHTML={{ __html: pic }}></div>
					</div>
					<div className="ClosetModalBody">
						<h2 className="ModalHeading">{itemName}</h2>
						<p className="ModalPara">{description}</p>
						<p className="ModalPara">Color: {color}</p>
						<p className="ModalPara">Type: {type}</p>
						<p className="ModalPara">Style: {style}</p>
						<p className='ModalPara'>Gender: {gender}</p>
					</div>
				</div>
				<button className="ModalLike" onClick={AddToCloset}>ADD</button>
			</div>
		</div>
	);
}

export default CatalogModal;