import React from 'react';
import '../styles/Modal.css';

const ClosetModal = ({id, itemName, pic, description, color, type, handleClose}) => {
	return (
		<div className='ModalBackground'>
			<div className='Modal'>
				<button className="ModalClose" onClick={() => handleClose()}>x</button>
				<div className="ModalMain">
					<div className="ModalImage">
						<img src={pic} alt="" className="ModalPic" />
					</div>
					<div className="ClosetModalBody">
						<h2 className="ModalHeading">{itemName}</h2>
						<p className="ModalPara">{description}</p>
						<p className="ModalPara">Color: {color}</p>
						<p className="ModalPara">Type: {type}</p>
					</div>
				</div>
				<button className="ModalLike">&hearts;</button>
			</div>
		</div>	
	);
}

export default ClosetModal;