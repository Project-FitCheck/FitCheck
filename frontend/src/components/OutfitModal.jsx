import React from 'react';
import '../styles/Modal.css';

const OutfitModal = ({id, fitName, pic, description, handleClose}) => {
	return (
		<div className='ModalBackground'>
			<div className='Modal'>
				<button className="ModalClose" onClick={() => handleClose()}>x</button>
				<div className="ModalMain">
					<div className="ModalImage" style={{overflow: "hidden"}}>
						<img src={pic} width="500px" alt="" className="ModalPic" />
					</div>
					<div className="OutfitModalBody">
						<h2 className="ModalHeading">Outfit Name: {fitName}</h2>
						<p className="ModalPara">Description: {description}</p>
					</div>
				</div>
				<button className="ModalLike">&hearts;</button>
			</div>
		</div>	
	);
}

export default OutfitModal;