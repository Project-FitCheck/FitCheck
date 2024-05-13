import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar.js';
import CatalogCard from '../components/CatalogCard.jsx';
import Select from 'react-select';
import "../styles/catalog.css";
import '../styles/CardArea.css';

function Catalog() {

	const gender = [
		{ value: "all", label: "All" },
		{ value: "male", label: "Male" },
		{ value: "female", label: "Female" }
	]
	const color = [
		{ value: 'all', label: 'All' },
		{ value: 'black', label: 'Black' },
		{ value: 'white', label: 'White' },
		{ value: 'red', label: 'Red' },
		{ value: 'blue', label: 'Blue' },
		{ value: 'gray', label: 'Gray' },
		{ value: 'green', label: 'Green' },
		{ value: 'tan', label: 'Tan' },
		{ value: 'cottoncandy', label: 'Cotton Candy' }
	]
	const type = [
		{ value: 'all', label: 'All' },
		{ value: 'shirt', label: 'Shirt' },
		/*{ value: 'long-sleeve', label: 'Long-sleeve' },
		{ value: 'sweater', label: 'Sweater' },
		{ value: 'jacket', label: 'Jacket' },*/
		{ value: 'shorts', label: 'Shorts' },
		/*{ value: 'jeans', label: 'Jeans' },
		{ value: 'sweatpants', label: 'Sweatpants' },*/
		{ value: 'pants', label: 'Pants' },
		/*{ value: 'dress', label: 'Dress' },*/
		{ value: 'shoes', label: 'Shoes' }
	]
	const style = [
		{ value: 'all', label: 'All' },
		{ value: 'casual', label: 'Casual' },
		{ value: 'streetwear', label: 'Streetwear' },
		/*{ value: 'formal', label: 'Formal' },
		{ value: 'business', label: 'Business' },
		{ value: 'gym', label: 'Gym' },
		{ value: 'fun', label: 'Fun' },
		{ value: 'lazy', label: 'Lazy' }*/
	]

	const [genderFilters, setGenderFilters] = useState("all")
	const [colorFilters, setColorFilters] = useState("all");
	const [typeFilters, setTypeFilters] = useState("all");
	const [styleFilters, setStyleFilters] = useState("all");
	const [filteredClothes, setFilteredClothes] = useState([]);

	const [catalog, updateCatalog] = useState([]);

	useEffect(() => {
		async function getCatalog() {
			try {
				const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/clothes/");
				//const response = await axios.get("http://localhost:3001/clothes/");
				updateCatalog(response.data);
				setFilteredClothes(response.data);
			} catch (error) {
				console.error("Error fetching clothes from closet:", error);
			}
		}
		getCatalog();
	}, []);

	const applyFilters = (e) => {
		e.preventDefault();
		var temp = [];
		var temp2 = [];
		var temp3 = [];
		var temp4 = []
		var i;
		//check filter color first
		if (colorFilters === "all") {
			temp = catalog;
		} else {
			for (i = 0; i < catalog.length; i++) {
				if (catalog[i].color === colorFilters) {
					temp.push(catalog[i]);
				}
			}
		}
		//check filter type next
		if (typeFilters === "all") {
			temp2 = temp;
		} else {
			for (i = 0; i < temp.length; i++) {
				if (temp[i].type === typeFilters) {
					temp2.push(temp[i]);
				}
			}
		}
		//check filter style next
		if (styleFilters === "all") {
			temp3 = temp2;
		} else {
			for (i = 0; i < temp2.length; i++) {
				if (temp2[i].style === styleFilters) {
					temp3.push(temp2[i]);
				}
			}
		}
		if (genderFilters === "all") {
			temp4 = temp3;
		} else {
			for (i = 0; i < temp3.length; i++) {
				if (temp3[i].gender === genderFilters) {
					temp4.push(temp3[i]);
				}
			}
		}
		return setFilteredClothes(temp4);
	}

	return (
		<>
			<NavBar page="catalog" />
			<div className="catalog">
				<div className="title">
					<h1>Catalog</h1>
				</div>

				<div className="greeting">
					<h2>What are you looking for?</h2>
				</div>

				<div className="list-container">

					{/* <div className="search">
						<input type="text" placeholder="Enter keyword"></input>
					</div> */}

					<div className="listGender">
						<h3>Gender</h3>
						<Select options={gender} onChange={(selectedOption) => setGenderFilters(selectedOption.value)} />
						{/*<Select options={gender} />*/}
					</div>

					<div className="listColor">
						<h3>Color</h3>
						<Select options={color} onChange={(selectedOption) => setColorFilters(selectedOption.value)} />
						{/*<Select options={color} />*/}
					</div>

					<div className="listType">
						<h3>Type</h3>
						<Select options={type} onChange={(selectedOption) => setTypeFilters(selectedOption.value)} />
						{/*<Select options={type} />*/}
					</div>

					<div className="listStyle">
						<h3>Style</h3>
						<Select options={style} onChange={(selectedOption) => setStyleFilters(selectedOption.value)} />
						{/*<Select options={style} />*/}
					</div>

					<div className="filterBtn">
						<button className="filter" onClick={applyFilters}>Apply Filters</button>
						{/*<button className="filter">Filter</button>*/}
					</div>
				</div>

				<div className="CardArea">
					{filteredClothes.map(filteredClothes => {
						return (<CatalogCard
							key={filteredClothes._id}
							id={filteredClothes._id}
							itemName={filteredClothes.productTitle}
							gender={filteredClothes.gender}
							pic={filteredClothes.image}
							description={filteredClothes.description}
							color={filteredClothes.color}
							type={filteredClothes.type}
							style={filteredClothes.style}
						/>)
					}
					)}
				</div>
			</div>
		</>
	);
}

export default Catalog;