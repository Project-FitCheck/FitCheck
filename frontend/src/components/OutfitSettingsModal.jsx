import { useState } from 'react';
import React from 'react';
import '../styles/Modal.css';
import { Button } from '@mui/material';
import axios from 'axios';

const OutfitSettingsModal = ({ pic, shirt, pants, shoes, handleClose }) => {
	const [fitName, setFitName] = useState("");
	const [description, setDescription] = useState("");

	async function saveOutfit() {
		try {
			const userId = window.localStorage.getItem("userId");
			const Outfit = { torso: shirt, legs: pants, shoes: shoes, image: pic };
			await axios.post(/* "https://fitcheck-backend-7mo5.onrender.com */"http://localhost:3001/locker/add", { userId, Outfit })

		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className='ModalBackground'>
			{console.log(pic)}
			<div className='Modal'>
				<button className="ModalClose" onClick={() => handleClose()}>x</button>
				<div className="ModalMain">
					<div className="ModalImage">
						<img src={pic} width={280} alt="" className="ModalPic" />
					</div>
					<div className='outfitSettings'>
						<div className='shirtContainer' >Top: {shirt}</div>
						<div className='pantsContainer' >Pants: {pants}</div>
						<div className='shoesContainer' >Shoes: {shoes}</div>
						<label htmlFor>Fit Name</label>
						<input value={fitName} onChange={(e) => setFitName(e.target.value)} name="fitName" id="fitName" placeholder="..." />
						<label htmlFor>Description</label>
						<input value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" placeholder="..." />
						<Button onClick={saveOutfit}>Confirm Save Outfit</Button>
					</div>
					<button className="ModalLike">&hearts;</button>
				</div>
			</div>
		</div>
	);
}

export default OutfitSettingsModal;