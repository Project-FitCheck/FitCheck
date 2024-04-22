import React, { useEffect, useState, useRef } from 'react';
import { useScreenshot } from 'use-react-screenshot'
import '../styles/Model.css';
import ModelNav from '../components/ModelNav';
import ModelViewer from '../components/model_viewer';
import NavBar from '../components/navbar.js';
import axios from 'axios';
import { Button } from '@mui/material';

var SHIRT, PANTS, SHOES;

function Clothes(props) {
	const [clothing, setClothing] = useState([]);
	const [shirts, setShirts] = useState([]);
	const [pants, setPants] = useState([]);
	const [shoes, setShoes] = useState([]);

	const [, setRerender] = useState();

	const shirtIndex = useRef(0);
	const pantsIndex = useRef(0)
	const shoesIndex = useRef(0);

	useEffect(() => {
		async function getClothing() {
			try {
				const userId = window.localStorage.getItem("userId");
				const response = await axios.get(/* "https://fitcheck-backend-7mo5.onrender.com */ "http://localhost:3001/closet/?userId=" + userId);
				setClothing(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		getClothing();
	}, []); // Run only once on component mount

	useEffect(() => {
		// Filter clothing after it has been updated
		setShirts(clothing.filter((x) => x.type === "shirt"));
		setPants(clothing.filter((x) => x.type === "pants"));
		setShoes(clothing.filter((x) => x.type === "shoes"));
	}, [clothing]); // Run whenever clothing state changes

/* 	useEffect(() => {
		setRerender({});
	},[shirtIndex, pantsIndex, shoesIndex])
 */
	function cycleShirt() {
		shirtIndex.current = (shirtIndex.current + 1) % shirts.length;
	}

	function cyclePants() {
		pantsIndex.current = (pantsIndex.current + 1) % pants.length;
	}

	function cycleShoes() {
		shoesIndex.current = (shoesIndex.current + 1) % shoes.length;
	}

	SHIRT = shirts[shirtIndex.current];
	PANTS = pants[pantsIndex.current];
	SHOES = shoes[shoesIndex.current];

	if (props.gender === "male") {
		return (
			<>
			{console.log(shirtIndex.current)}
				{shirts.length > 0 && (
					<div className='male_shirt' onClick={cycleShirt()} dangerouslySetInnerHTML={{ __html: shirts[shirtIndex.current]?.image }} />
				)}
				{pants.length > 0 && (
					<div className='male_pants' onClick={cyclePants()} dangerouslySetInnerHTML={{ __html: pants[pantsIndex.current]?.image }} />
				)}
				{shoes.length > 0 && (
					<div className='male_shoes' onClick={cycleShoes()} dangerouslySetInnerHTML={{ __html: shoes[shoesIndex.current]?.image }} />
				)}
			</>
		);
	} else {
		return (
			<>
				{shirts.length > 0 && (
					<div className='female_shirt' onClick={cycleShirt} dangerouslySetInnerHTML={{ __html: shirts[shirtIndex]?.image }} />
				)}
				{pants.length > 0 && (
					<div className='female_pants' onClick={cyclePants} dangerouslySetInnerHTML={{ __html: pants[pantsIndex]?.image }} />
				)}
				{shoes.length > 0 && (
					<div className='female_shoes' onClick={cycleShoes} dangerouslySetInnerHTML={{ __html: shoes[shoesIndex]?.image }} />
				)}
			</>
		);
	}
}

function Model() {
	const [model, setModel] = useState("");
	const [modelGender, setModelGender] = useState("");
	const [description, setDescription] = useState("");
	const [fitName, setFitName] = useState("");
	const [shirt, setShirt] = useState("")
	const [pants, setPants] = useState("")
	const [shoes, setShoes] = useState("")

	const ref = useRef(null);

	const [image, takeScreenshot] = useScreenshot();

	const getImage = () => takeScreenshot(ref.current)

	useEffect(() => {
		async function getModel() {
			try {
				const userId = window.localStorage.getItem("userId");
				const response = await axios.get(/* "https://fitcheck-backend-7mo5.onrender.com */"http://localhost:3001/model/?userId=" + userId);
				response.data.fullBody.replace(/"/g, '');
				setModel(response.data.fullBody);
				setModelGender(response.data.gender);
			} catch (error) {
				console.error("Error fetching model data:", error);
			}
		}

		getModel();
	}, []);

	console.log(SHIRT)
	console.log(PANTS)
	console.log(SHOES)
/*  	setShirt(SHIRT);
	setPants(PANTS);
	setShoes(SHOES); */


	async function saveOutfit() {
		getImage();
		try {
			const userId = window.localStorage.getItem("userId");
			const Outfit = { torso: SHIRT, legs: PANTS, shoes: SHOES, image: image };
			console.log(image);
			await axios.post(/* "https://fitcheck-backend-7mo5.onrender.com */"http://localhost:3001/locker/add", { userId, Outfit })

		} catch (err) {
			console.error(err);
		}
	}

	return (<div className='MainPage'>
		<div className='Model'>
			<NavBar page="model" />
			<ModelNav props={{ mode: "view" }} />
			<div className='outfit' ref={ref}>
				<Clothes gender={modelGender} />
				<ModelViewer props={{ mode: "view", model: model }} />
			</div>
			<div className='outfitSettings'>
				<div className='shirtContainer' >Top: {shirt}</div>
				<div className='pantsContainer' >Pants: {pants}</div>
				<div className='shoesContainer' >Shoes: {shoes}</div>
				<label htmlFor>Fit Name</label>
				<input value={fitName} onChange={(e) => setFitName(e.target.value)} name="fitName" id="fitName" placeholder="..." />
				<label htmlFor>Description</label>
				<input value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" placeholder="..." />
				<Button onClick={saveOutfit}>Save Outfit</Button>
			</div>
		</div>
	</div>);
}

export default Model;