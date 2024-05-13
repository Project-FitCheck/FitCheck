import React from 'react';
import axios from "axios";
import '../styles/Modal.css';

const OutfitModal = ({ id, fitName, pic, description, handleClose, shirt, pants, shoes }) => {

	async function removeFromLocker() {
		try {
			const userId = window.localStorage.getItem("userId");
			const Outfit = { head: {}, torso: { shirt }, legs: { pants }, socks: {}, shoes: { shoes }, tags: [""], image: pic, fitName: fitName, description: description };
			await axios.delete("https://fitcheck-backend-7mo5.onrender.com/locker/add", {data: { userId, Outfit }});
			//await axios.delete("http://localhost:3001/locker/", { data: { userId, Outfit } });
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
						<img src={pic} width="500px" alt="" className="ModalPic" />
					</div>
					<div className="OutfitModalBody">
						<h2 className="ModalHeading">Outfit Name: {fitName}</h2>
						<p className="ModalPara">Description: {description}</p>
					</div>
				</div>
				<button className="ModalLike" onClick={removeFromLocker}>DEL</button>
			</div>
		</div>
	);
}

export default OutfitModal;