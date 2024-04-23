import React from 'react';
import axios from "axios";
import '../styles/AddClothingItem.css';

function AddClothingItem(props) {
	async function addToCloset() {
		try {
			const userId = window.localStorage.getItem("userId");
			const clothingItem = {
				productTitle: props.color + " " + props.type,
				type: props.type,
				color: props.color,
				description: props.description,
				style: props.style,
				image: props.image
			}
			await axios.post("http://localhost:3001/closet/add", {userId, clothingItem});
		} catch (error) {
			console.error(error);
		}
	}
	console.log(props.initial)
	if (props.initial === true) {
		return null;
	}
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
				<div className='clothingItem' dangerouslySetInnerHTML={{__html: props.image}}>
					{/* {svgLink} */}
					{/* <img src={props.image} alt={props.description}></img> */}
				</div>
				<button onClick={addToCloset}>ADD</button>
			</div>
		);
	}
}

export default AddClothingItem;