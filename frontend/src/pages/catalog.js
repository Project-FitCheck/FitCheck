import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar.js';
import ClothesCard from '../components/ClothesCard.jsx';
import Select from 'react-select';
import "../styles/catalog.css";
import '../styles/CardArea.css';

function Catalog() {

	const color = [
		{ value: 'all', label: 'All' },
		{ value: 'black', label: 'Black' },
		{ value: 'white', label: 'White' },
		{ value: 'red', label: 'Red' },
		{ value: 'blue', label: 'Blue' },
		{ value: 'yellow', label: 'Yellow' },
		{ value: 'green', label: 'Green' },
		{ value: 'pink', label: 'Pink' },
		{ value: 'purple', label: 'Purple' }
	]
	const type = [
		{ value: 'all', label: 'All' },
		{ value: 't-shirt', label: 'T-shirt' },
		{ value: 'long-sleeve', label: 'Long-sleeve' },
		{ value: 'sweater', label: 'Sweater' },
		{ value: 'jacket', label: 'Jacket' },
		{ value: 'shorts', label: 'Shorts' },
		{ value: 'jeans', label: 'Jeans' },
		{ value: 'sweatpants', label: 'Sweatpants' },
		{ value: 'longpants', label: 'Long pants' },
		{ value: 'dress', label: 'Dress' }
	]
	const style = [
		{ value: 'all', label: 'All' },
		{ value: 'casual', label: 'Casual' },
		{ value: 'streetwear', label: 'Streetwear' },
		{ value: 'formal', label: 'Formal' },
		{ value: 'business', label: 'Business' },
		{ value: 'gym', label: 'Gym' },
		{ value: 'fun', label: 'Fun' },
		{ value: 'lazy', label: 'Lazy' }
	]

	/*const [colorFilter, setColorFilter] = useState('All');
	const [typeFilter, setTypeFilter] = useState('All');
	const [styleFilter, setStyleFilter] = useState('All');*/

	const [catalog, updateCatalog] = useState([
		{ id: 1, itemName: "redShirt1", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt" },
		{ id: 2, itemName: "bluePant1", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant" },
		{ id: 3, itemName: "redShirt2", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt" },
		{ id: 4, itemName: "bluePant2", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant" },
		{ id: 5, itemName: "redShirt3", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt" },
		{ id: 6, itemName: "bluePant3", pic: "/images/panttestImage-closet.png", description: "This is a blue pant", color: "Blue", type: "pant" },
		{ id: 7, itemName: "redShirt4", pic: "/images/shirttestImage-closet.png", description: "This is a red shirt", color: "Red", type: "shirt" }
	]);

	useEffect(() => {
		async function getCatalog() {
			try {
				//const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/clothes/");
				const response = await axios.get("https://localhost:3001/");
				updateCatalog(response);
				console.log(response);
			} catch (error) {
				console.error("Error fetching clothes from closet:", error);
			}
		}
		getCatalog();
	}, []);

	/*const applyFilters = () => {
		let filteredCatalog = catalog.filter(item => {
			console.log("Color Filter:", colorFilter);
			console.log("Type Filter:", typeFilter);
			console.log("Style Filter:", styleFilter);
			console.log("Item Color:", item.color);
			console.log("Item Type:", item.type);
			console.log("Item Style:", item.style);

			return (colorFilter === 'All' || item.color === colorFilter.value) &&
				   (typeFilter === 'All' || item.type === typeFilter.value) &&
				   (styleFilter === 'All' || item.style === styleFilter.value);
		});
		updateCatalog(filteredCatalog);
	};*/

	return (
		<div className="catalog">
			<NavBar />

			<div className="title">
				<h1>Catalog</h1>
			</div>

			<div className="greeting">
				<h2>What are you looking for?</h2>
			</div>

			<div className="list-container">

				<div className="search">
					<input type="text" placeholder="Enter keyword"></input>
				</div>

				<div className="listColor">
					<h3>Color</h3>
					{/*<Select options={color} onChange={(selectedOption) => setColorFilter(selectedOption.value)} />*/}
					<Select options={color} />
				</div>

				<div className="listType">
					<h3>Type</h3>
					{/*<Select options={type} onChange={(selectedOption) => setTypeFilter(selectedOption.value)} />*/}
					<Select options={type} />
				</div>

				<div className="listStyle">
					<h3>Style</h3>
					{/*<Select options={style} onChange={(selectedOption) => setStyleFilter(selectedOption.value)} />*/}
					<Select options={style} />
				</div>

				<div className="filterBtn">
					{/*<button className="filter" onClick={applyFilters}>Filter</button>*/}
					<button className="filter">Filter</button>
				</div>
			</div>

			<div className="CardArea">
				{catalog.map(catalog => {
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