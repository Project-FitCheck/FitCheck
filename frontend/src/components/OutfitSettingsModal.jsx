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
			const Outfit = { head: {}, torso: { shirt }, legs: { pants }, socks: {}, shoes: { shoes }, tags: [""], image: pic, fitName: fitName, description: description };
			//await axios.post("http://localhost:3001/locker/add", { userId, Outfit });
			await axios.post("https://fitcheck-backend-7mo5.onrender.com/locker/add", { userId, Outfit });
			handleClose();
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className='ModalBackground'>
			<div className='Modal'>
				<button className="ModalClose" onClick={() => handleClose()}>x</button>
				<div className="ModalMain">
					<div className="ModalImage" style={{ overflow: "hidden" }}>
						<img src={pic} width={500} alt="" className="ModalPic" />
					</div>
					<div className='outfitSettings'>
						<div className='shirtContainer' >Top: {shirt.productTitle}
							<div dangerouslySetInnerHTML={{ __html: shirt.image }} />
						</div>

						<div className='pantsContainer' >Pants: {pants.productTitle}
							<div dangerouslySetInnerHTML={{ __html: pants.image }} />
						</div>

						<div className='shoesContainer' >Shoes: {shoes.productTitle}
							<div dangerouslySetInnerHTML={{ __html: shoes.image }} />
						</div>
						<label htmlFor>Fit Name</label>
						<input value={fitName} onChange={(e) => setFitName(e.target.value)} name="fitName" id="fitName" placeholder="..." />
						<label htmlFor>Description</label>
						<input value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" placeholder="..." />
						<Button class="confirmSave" onClick={saveOutfit}>Confirm Save Outfit</Button>
					</div>
					<button className="ModalLike">&hearts;</button>
				</div>
			</div>
		</div>
	);
}

export default OutfitSettingsModal;