import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Clothes.css';
import '../styles/CardArea.css';
import ClothesCard from './ClothesCard';
import axios from 'axios';



const Clothes = () => {
	const [clothing, updateClothing] = useState([])

	useEffect(() => {
		async function getClothes() {
			try {
				const userId = window.localStorage.getItem("userId");
				const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/closet/?userId=" + userId);
				// const response = await axios.get("http://localhost:3001/closet/?userId=" + userId);
				updateClothing(response.data);
			} catch (error) {
				console.error("Error fetching clothes from closet:", error);
			}
		}
		getClothes();
	}, []);

	return (
		<div className='Clothes'>
			<h1>Welcome to your Closet!</h1>
			<div className="CardArea">
				{clothing.map(clothing => {
					return (<ClothesCard
						key={clothing._id}
						id={clothing._id}
						itemName={clothing.productTitle}
						pic={clothing.image}
						description={clothing.description}
						gender={clothing.gender}
						color={clothing.color}
						type={clothing.type}
						style={clothing.style}
					/>)
				})}
			</div>
		</div>
	);
}

export default Clothes;