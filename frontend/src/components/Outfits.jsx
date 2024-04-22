import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Outfits.css';
import '../styles/CardArea.css';
import OutfitCard from './OutfitCard';
import axios from 'axios';

const Outfits = () => {
	const [outfit, updateOutfit] = useState([]/* [
		{id: 1, fitName: "gym", pic: "/images/testImage-locker.png", description: "This is my gym outfit"},
		{id: 2, fitName: "work", pic: "/images/testImage-locker.png", description: "This is my work outfit"},
		{id: 3, fitName: "fun", pic: "/images/testImage-locker.png", description: "This is my fun outfit"},
		{id: 4, fitName: "lazy", pic: "/images/testImage-locker.png", description: "This is my lazy outfit"},
	] */)

	useEffect(() => {
        async function getOutfits() {
            try {
                const userId = window.localStorage.getItem("userId");
                const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/locker/?userId=" + userId);
                updateOutfit(response);
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
				{outfit.map(outfit =>{
					return (<OutfitCard
						key={outfit._id}
						id={outfit._id}
						fitName={outfit.fitName}
						pic={outfit.image}
						description={outfit.description}
					/>)
				})}
			</div>
		</div>
	);
}

export default Outfits;