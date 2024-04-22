import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar.js';
import ClothesCard from '../components/ClothesCard.jsx';
import "../styles/catalog.css";
import '../styles/CardArea.css';

function Catalog() {

	const [catalog, updateCatalog] = useState([
		{id: 1, fitName: "gym", pic: "/images/testImage-locker.png", description: "This is my gym outfit"},
		{id: 2, fitName: "work", pic: "/images/testImage-locker.png", description: "This is my work outfit"},
		{id: 3, fitName: "fun", pic: "/images/testImage-locker.png", description: "This is my fun outfit"},
		{id: 4, fitName: "lazy", pic: "/images/testImage-locker.png", description: "This is my lazy outfit"},
	]);

	useEffect(() => {
		async function getCatalog() {
			try {
				//const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/clothes/");
				const response = await axios.get("https://localhost:3000/");
				updateCatalog(response);
				console.log(response);
			} catch (error) {
				console.error("Error fetching clothes from closet:", error);
			}
		}
		getCatalog();
	}, []);

	return (
		<div className="catalog">
			<NavBar />

			<h1>Catalog</h1>
			<form>
				<div className="search">
					<label>What are you looking for?</label>
					<br></br>
					<input type="searchFor" name="clothes"></input>
				</div>
				<div className="srchButton">
					<button type="submit">Search</button>
				</div>
			</form>

			<div className="CardArea">
				{catalog.map(catalog=> {
					return (<ClothesCard
						key={catalog._id}
						id={catalog._id}
						itemName={catalog.productTitle}
						pic={catalog.image}
						description={catalog.description}
						color={catalog.color}
						type={catalog.type}
						style={catalog.style}
					/>)
				}
				)}
			</div>
		</div>
	);
}

export default Catalog;