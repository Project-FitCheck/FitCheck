import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import AddClothingItem from './AddClothingItem';
import '../styles/Add.css';

function Add() {
	const [colorFilters, setColorFilters] = useState('');
    const [typeFilters, setTypeFilters] = useState('');
    const [styleFilters, setStyleFilters] = useState('');
    const [genderFilters, setGenderFilters] = useState('');
    const [clothing, updateClothing] = useState([]);
    const [filteredItem, setFilteredItem] = useState([]);
	const [isActive, setIsActive] = useState(false);
	const [isInitial, setIsInitial] = useState(true);

    useEffect(() => {
        async function getClothes() {
            try {
                const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/clothes/");
                updateClothing(response.data);
            } catch (error) {
                console.error("Error fetching clothes from closet:", error);
            }
        }
        getClothes();
    }, []);

	const applyFilters = (e) => {
        e.preventDefault();
		setIsInitial(false);
		var temp = [];
		var temp2 = [];
		var temp3 = [];
		var temp4 = [];
        var i;
        //check filter color first
        for (i = 0; i < clothing.length; i++) {
            if (clothing[i].color === colorFilters) {
                temp.push(clothing[i]);
            }
        }
        //check filter type next
        for (i = 0; i < temp.length; i++) {
            if (temp[i].type === typeFilters) {
                temp2.push(temp[i]);
            }
        }
        //check filter style next
        for (i = 0; i < temp2.length; i++) {
            if(temp2[i].style === styleFilters) {
                temp3.push(temp2[i]);
            }
        }
		//check gender style next
		for (i = 0; i < temp3.length; i++) {
            if(temp3[i].gender === genderFilters) {
                temp4.push(temp3[i]);
            }
        }
		if (temp4.length < 1) {
			setIsActive(false)
			return null;
		}
		setIsActive(true);
		return setFilteredItem(temp4[0]);
    }

	return (<div className='Add'>
		<h1>Upload Your Clothes Here!</h1>
		<div className='FindAddItem'>
			<form action="">
				<label htmlFor="type">Choose type: <select value={typeFilters} onChange = {(e)=> {setTypeFilters(e.target.value)}} name="type" id="type">
						<option style={{display: "none"}}></option>
						<option value="shirt">Shirt</option>
						<option value="pants">Pant</option>
						<option value="shoes">Shoe</option>
					</select>
				</label>
				<label htmlFor="color">Color: <select value={colorFilters} onChange = {(e)=> setColorFilters(e.target.value)} name="color" id="color">
						<option style={{display: "none"}}></option>
						<option value="red">Red</option>
						<option value="tan">Tan</option>
						<option value="blue">Blue</option>
						<option value="white">White</option>
						<option value="gray">Grey</option>
						<option value="cottoncandy">Cotton Candy</option>
						<option value="green">Green</option>
					</select>
				</label>
				<label htmlFor="style">Style: <select value={styleFilters} onChange = {(e)=> setStyleFilters(e.target.value)} name="size" id="size">
						<option style={{display: "none"}}></option>
						<option value="casual">Casual</option>
						<option value="streetwear">Streetwear</option>
						<option value="formal">Formal</option>
					</select>
				</label>
				<label htmlFor="gender">Gender: <select value={genderFilters} onChange = {(e)=> setGenderFilters(e.target.value)} name="gender" id="gender">
						<option style={{display: "none"}}></option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</label>
				<button onClick={applyFilters}>SUBMIT</button>
			</form>
			<div className='clothingFromCatalog'>
				<AddClothingItem image={filteredItem.image} description={filteredItem.description} color={filteredItem.color} type={filteredItem.type} style={filteredItem.style} gender={filteredItem.gender} show={isActive} initial={isInitial} />
			</div>
		</div>
	</div>
	);
}

export default Add;