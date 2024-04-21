import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Clothes.css';
import '../styles/CardArea.css';
import ClothesCard from './ClothesCard';
import axios from 'axios';



const Clothes = () => {
	const [clothing, updateClothing] = useState(/* [
		{ id: 1, itemName: "redShirt1", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt"},
		{ id: 2, itemName: "bluePant1", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant"},
		{ id: 3, itemName: "redShirt2", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt"},
		{ id: 4, itemName: "bluePant2", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant"},
		{ id: 5, itemName: "redShirt3", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt"},
		{ id: 6, itemName: "bluePant3", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant"},
		{ id: 7, itemName: "redShirt4", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt"}
	] */)

	useEffect(() => {
        async function getClothes() {
            try {
                const userId = window.localStorage.getItem("userId");
                const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/closet/?userId=" + userId);
                updateClothing(response);
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
				{clothing.map(clothing =>{
					return(<ClothesCard
						key={clothing._id}
						id={clothing._id}
						itemName={clothing.productTitle}
						pic={clothing.image}
						description={clothing.description}
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