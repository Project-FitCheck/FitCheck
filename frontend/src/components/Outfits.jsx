import React from 'react';
import { useState } from 'react';
import '../styles/Outfits.css';
import '../styles/CardArea.css';
import OutfitCard from './OutfitCard';

const Outfits = () => {
	const [outfit, updateOutfit] = useState([
		{id: 1, fitName: "gym", pic: "/images/testImage-locker.png", description: "This is my gym outfit"},
		{id: 2, fitName: "work", pic: "/images/testImage-locker.png", description: "This is my work outfit"},
		{id: 3, fitName: "fun", pic: "/images/testImage-locker.png", description: "This is my fun outfit"},
		{id: 4, fitName: "lazy", pic: "/images/testImage-locker.png", description: "This is my lazy outfit"},
	])
	
	return (
		<div className='Outfits'>
			<h1>Welcome to your Locker!</h1>
			<div className="CardArea">
				{outfit.map(outfit =>{
					return (<OutfitCard
						key={outfit.id}
						id={outfit.id}
						fitName={outfit.fitName}
						pic={outfit.pic}
						description={outfit.description}
					/>)
				})}
			</div>
		</div>
	);
}

export default Outfits;