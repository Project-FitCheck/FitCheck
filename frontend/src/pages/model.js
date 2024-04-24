import React, { useEffect, useState, useRef } from 'react';
import { useScreenshot } from 'use-react-screenshot'
import '../styles/Model.css';
import ModelNav from '../components/ModelNav';
import ModelViewer from '../components/model_viewer';
import NavBar from '../components/navbar.js';
import axios from 'axios';
import { Button } from '@mui/material';
import OutfitSettingsModal from '../components/OutfitSettingsModal.jsx';

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

	useEffect(() => {
		SHIRT = shirts[shirtIndex.current];
		PANTS = pants[pantsIndex.current];
		SHOES = shoes[shoesIndex.current];
	}, [shirts, pants, shoes, shirtIndex, pantsIndex, shoesIndex, clothing]);
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

	const maleShirtStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '145px',
		left: '-1.25%',
		margin: 'inherit',
		zIndex: '2',
		position: 'relative'
	};

	const malePantStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '100px',
		left: '-1%',
		margin: '0 auto',
		zIndex: '1',
		position: 'relative'
	};

	const maleShoeStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '80px',
		margin: 'inherit',
		zIndex: '1',
		position: 'relative'
	};

	const femaleShirtStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '145px',
		left: '-1.25%',
		margin: 'inherit',
		zIndex: '2',
		position: 'relative'
	};

	const femalePantStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '100px',
		left: '-1%',
		margin: '0 auto',
		zIndex: '1',
		position: 'relative'
	};

	const femaleShoeStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '80px',
		margin: 'inherit',
		zIndex: '1',
		position: 'relative'
	}

	if (props.gender === "male") {
		return (
			
			<>
				{shirts.length > 0 && (
					<div className='male_shirt' onClick={cycleShirt()} dangerouslySetInnerHTML={{ __html: shirts[shirtIndex.current]?.image }}
						style={maleShirtStyle} />
				)}
				{pants.length > 0 && (
					<div className='male_pants' onClick={cyclePants()} dangerouslySetInnerHTML={{ __html: pants[pantsIndex.current]?.image }}
						style={malePantStyle} />
				)}
				{shoes.length > 0 && (
					<div className='male_shoes' onClick={cycleShoes()} dangerouslySetInnerHTML={{ __html: shoes[shoesIndex.current]?.image }}
						style={maleShoeStyle} />
				)}
			</>
		);
	} else {
		return (
			<>

				{shirts.length > 0 && (
					<div className='female_shirt' onClick={cycleShirt} dangerouslySetInnerHTML={{ __html: shirts[shirtIndex.current]?.image }} 
					style={femaleShirtStyle}/>
				)}
				{pants.length > 0 && (
					<div className='female_pants' onClick={cyclePants} dangerouslySetInnerHTML={{ __html: pants[pantsIndex.current]?.image }} 
					style={femalePantStyle}/>
				)}
				{shoes.length > 0 && (
					<div className='female_shoes' onClick={cycleShoes} dangerouslySetInnerHTML={{ __html: shoes[shoesIndex.current]?.image }} 
					style={femaleShoeStyle}/>
				)}
			</>
		);
	}
}

function Model() {
	const [model, setModel] = useState("");
	const [modelGender, setModelGender] = useState("");
	const [shirt, setShirt] = useState("");
	const [pants, setPants] = useState("");
	const [shoes, setShoes] = useState("");
	const [showModal, setShowModal] = useState(false);
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

	const handleClose = () => { setShowModal(false) };


	return (<div className='MainPage'>
		<div className='Model'>
			<NavBar page="model" />
			<ModelNav props={{ mode: "view" }} />
			<div className='outfit' ref={ref}>
				<Clothes gender={modelGender} />
				<ModelViewer props={{ mode: "view", model: model }} />
			</div>
			<Button onClick={() => {
				setShowModal(true);
				getImage();
				setShirt(SHIRT.productTitle);
				setPants(PANTS.productTitle);
				setShoes(SHOES.productTitle);
			}}>Save Outfit</Button>
			{showModal && <OutfitSettingsModal pic={image} shirt={shirt} pants={pants} shoes={shoes} handleClose={handleClose} />}
		</div>
	</div>);
}

export default Model;