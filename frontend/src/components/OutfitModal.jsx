import React from 'react';
import '../styles/Modal.css';

const OutfitModal = ({id, fitName, pic, description, handleClose}) => {
	return (
		<div className='ModalBackground'>
			<div className='Modal'>
				<button className="ModalClose" onClick={() => handleClose()}>x</button>
				<div className="ModalMain">
					<div className="ModalImage">
						<img src={pic} alt="" className="ModalPic" />
					</div>
					<div className="OutfitModalBody">
						<h2 className="ModalHeading">{fitName}</h2>
						<p className="ModalPara">{description}</p>
					</div>
				</div>
				<button className="ModalLike">&hearts;</button>
			</div>
		</div>	
	);
}

export default OutfitModal;