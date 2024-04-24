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

	const [shirtIndex, setShirtIndex] = useState(0);
	const [pantsIndex, setPantsIndex] = useState(0)
	const [shoesIndex, setShoesIndex] = useState(0);

	useEffect(() => {
		async function getClothing() {
			try {
				const userId = window.localStorage.getItem("userId");
				const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/closet/?userId=" + userId);
				setClothing(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		getClothing();
	}, []); // Run only once on component mount

	useEffect(() => {
		// Filter clothing after it has been updated
		setShirts(clothing.filter((x) => (x.type === "shirt") && (x.gender === props.gender)));
		setPants(clothing.filter((x) => (x.type === "pants") && (x.gender === props.gender)));
		setShoes(clothing.filter((x) => (x.type === "shoes") && (x.gender === props.gender)));
		console.log(clothing);
	}, [clothing, props.gender]); // Run whenever clothing state changes

	useEffect(() => {
		SHIRT = shirts[shirtIndex];
		PANTS = pants[pantsIndex];
		SHOES = shoes[shoesIndex];
	}, [shirts, pants, shoes, shirtIndex, pantsIndex, shoesIndex, clothing]);

	function cycleShirtLeft() {
		setShirtIndex(Math.abs(shirtIndex - 1) % shirts.length);
		console.log(shirtIndex)
	}

	function cyclePantsLeft() {
		setPantsIndex(Math.abs(pantsIndex - 1) % pants.length);
		console.log(pantsIndex)
	}

	function cycleShoesLeft() {
		setShoesIndex(Math.abs(shoesIndex - 1) % shoes.length);
		console.log(shoesIndex)
	}

	function cycleShirtRight() {
		setShirtIndex((shirtIndex + 1) % shirts.length);
		console.log(shirtIndex)
	}

	function cyclePantsRight() {
		setPantsIndex((pantsIndex + 1) % pants.length);
		console.log(pantsIndex)
	}

	function cycleShoesRight() {
		setShoesIndex((shoesIndex + 1) % shoes.length);
		console.log(shoesIndex)
	}

	const maleShirtStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '145px',
		left: '66%',
		margin: 'inherit',
		zIndex: '2',
		position: 'relative'
	};

	const malePantStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '100px',
		left: '72.5%',
		margin: '0 auto',
		zIndex: '1',
		position: 'relative'
	};

	const maleShoeStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '80px',
		margin: 'inherit',
		left: "92.5%",
		zIndex: '1',
		position: 'relative'
	};

	const femaleShirtStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '108px',
		left: "72.5%",
		margin: 'inherit',
		zIndex: '2',
		position: 'relative'
	};

	const femalePantStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '90px',
		left: "75%",
		margin: '0 auto',
		zIndex: '1',
		position: 'relative'
	};

	const femaleShoeStyle = {
		height: 'fit-content',
		width: 'fit-content',
		top: '70px',
		left: "92.5%",
		margin: 'inherit',
		zIndex: '1',
		position: 'relative'
	}

	useEffect(() => {
		var isShorts = document.getElementById('gray');
		if (isShorts != null) {
			isShorts.style["top"] = "-50px";
		}
		console.log(isShorts);
	}, [pants])


	if (props.gender === "male") {
		return (
			<>
				<div className='ModelViewerContainer'>
					<div className='leftButtons'>
						<Button className='cycleShirtLeft' onClick={cycleShirtLeft}>&#60;</Button>
						<Button className='cyclePantsLeft' onClick={cyclePantsLeft}>&#60;</Button>
						<Button className='cycleShoesLeft' onClick={cycleShoesLeft}>&#60;</Button>
					</div>
					<div className='middle'>
						{shirts.length > 0 && (
							<div className='male_shirt' dangerouslySetInnerHTML={{ __html: shirts[shirtIndex]?.image }}
								style={maleShirtStyle} />
						)}
						{pants.length > 0 && (
							<div className='male_pants' dangerouslySetInnerHTML={{ __html: pants[pantsIndex]?.image }}
								style={malePantStyle} />
						)}
						{shoes.length > 0 && (
							<div className='male_shoes' dangerouslySetInnerHTML={{ __html: shoes[shoesIndex]?.image }}
								style={maleShoeStyle} />
						)}
					</div>
					<div className='rightButtons'>
						<Button className='cycleShirtRight' onClick={cycleShirtRight}>&#62;</Button>
						<Button className='cyclePantsRight' onClick={cyclePantsRight}>&#62;</Button>
						<Button className='cycleShoesRight' onClick={cycleShoesRight}>&#62;</Button>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className='ModelViewerContainer'>
					<div className='leftButtons'>
						<Button className='cycleShirtLeft' onClick={cycleShirtLeft}>&#60;</Button>
						<Button className='cyclePantsLeft' onClick={cyclePantsLeft}>&#60;</Button>
						<Button className='cycleShoesLeft' onClick={cycleShoesLeft}>&#60;</Button>
					</div>
					<div className='middle'>
						{shirts.length > 0 && (
							<div className='female_shirt' dangerouslySetInnerHTML={{ __html: shirts[shirtIndex]?.image }}
								style={femaleShirtStyle} />
						)}
						{pants.length > 0 && (
							<div className='female_pants' dangerouslySetInnerHTML={{ __html: pants[pantsIndex]?.image }}
								style={femalePantStyle} />
						)}
						{shoes.length > 0 && (
							<div className='female_shoes' dangerouslySetInnerHTML={{ __html: shoes[shoesIndex]?.image }}
								style={femaleShoeStyle} />
						)}
					</div>
					<div className='rightButtons'>
						<Button className='cycleShirtRight' onClick={cycleShirtRight}>&#62;</Button>
						<Button className='cyclePantsRight' onClick={cyclePantsRight}>&#62;</Button>
						<Button className='cycleShoesRight' onClick={cycleShoesRight}>&#62;</Button>
					</div>
				</div>




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
				const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/model/?userId=" + userId);
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
		<NavBar page="model" />
		<ModelNav props={{ mode: "view" }} />
		<div className='Model'>
			<div className='outfit' ref={ref}>
				<Clothes gender={modelGender} />
				<ModelViewer props={{ mode: "view", model: model }} />
			</div>
			<Button className="saveFit" onClick={() => {
				setShowModal(true);
				getImage();
				setShirt(SHIRT);
				setPants(PANTS);
				setShoes(SHOES);
			}}>Save Outfit</Button>
			{showModal && <OutfitSettingsModal pic={image} shirt={shirt} pants={pants} shoes={shoes} handleClose={handleClose} />}
		</div>
	</div>);
}

export default Model;