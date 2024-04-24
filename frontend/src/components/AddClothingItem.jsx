import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../styles/AddClothingItem.css';

function AddClothingItem(props) {
	const navigate = useNavigate();
	async function addToCloset() {
		try {
			const userId = window.localStorage.getItem("userId");
			const clothingItem = {
				productTitle: props.gender + " " + props.color + " " + props.type,
				type: props.type,
				color: props.color,
				description: props.description,
				style: props.style,
				image: props.image,
				gender: props.gender
			}
			await axios.post("https://fitcheck-backend-7mo5.onrender.com/closet/add", {userId, clothingItem});
			navigate("/closet")
		} catch (error) {
			console.error(error);
		}
	}
	if (props.initial === true) { return null; }
	if (props.show === false) {
		return (
			<div className='NoItemsFound'>
				<p>No Clothing Item Found</p>
				<p>Please change your search criteria</p>
			</div>
		);
	} else {
		return (
			<div className='AddClothingItem'>
				<div className='clothingItem' dangerouslySetInnerHTML={{__html: props.image}}></div>
				<button onClick={addToCloset}>ADD</button>
			</div>
		);
	}
}

export default AddClothingItem;