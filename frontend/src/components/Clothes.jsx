import React from 'react';
import { useState } from 'react';
import '../styles/Clothes.css';
import '../styles/CardArea.css';
import ClothesCard from './ClothesCard';

const Clothes = () => {
	const [clothing, updateClothing] = useState([
		{ id: 1, itemName: "redShirt1", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt"},
		{ id: 2, itemName: "bluePant1", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant"},
		{ id: 3, itemName: "redShirt2", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt"},
		{ id: 4, itemName: "bluePant2", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant"},
		{ id: 5, itemName: "redShirt3", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt"},
		{ id: 6, itemName: "bluePant3", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant"},
		{ id: 7, itemName: "redShirt4", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt"}
	])

	return (
		<div className='Clothes'>
			<h1>Welcome to your Closet!</h1>
			<div className="CardArea">
				{clothing.map(clothing =>{
					return(<ClothesCard
						key={clothing.id}
						id={clothing.id}
						itemName={clothing.itemName}
						pic={clothing.pic}
						description={clothing.description}
						color={clothing.color}
						type={clothing.type}
					/>)
				})}
			</div>
		</div>
	);
}

export default Clothes;