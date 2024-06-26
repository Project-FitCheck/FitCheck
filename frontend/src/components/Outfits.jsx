import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Outfits.css';
import '../styles/CardArea.css';
import OutfitCard from './OutfitCard';
import axios from 'axios';

const Outfits = () => {
	const [outfit, updateOutfit] = useState([]);

	useEffect(() => {
		async function getOutfits() {
			try {
				const userId = window.localStorage.getItem("userId");
				const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/locker/?userId=" + userId);
				//const response = await axios.get("http://localhost:3001/locker/?userId=" + userId);
				updateOutfit(response.data);
			} catch (error) {
				console.error("Error fetching outfits from locker:", error);
			}
		}
		getOutfits();
	}, []);

	return (
		<div className='Outfits'>
			<h1>Welcome to your Locker!</h1>
			<div className="CardArea">
				{outfit.map(outfit => {
					return (<OutfitCard
						key={outfit._id}
						id={outfit._id}
						fitName={outfit.fitName}
						pic={outfit.image}
						description={outfit.description}
						shirt={outfit.torso}
						pants={outfit.legs}
						shoes={outfit.shoes}
					/>)
				})}
			</div>
		</div>
	);
}

export default Outfits;