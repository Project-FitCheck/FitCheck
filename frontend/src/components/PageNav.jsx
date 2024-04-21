import React from 'react';
import '../styles/PageNav.css';
import '../styles/Highlight.css';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function PageNav(props) {
	let closetPage = false;
	let lockerPage = false;
	if (props.page === 'clothes') {
		closetPage = true;
	} else if (props.page === 'outfit') {
		lockerPage = true;
	}

	return (<div className='PageNav'>
		<div className='PageNavButtons'>
			<Button className='addClothes' component={Link} to="/closet/add">+</Button>
			<Button className='searchButton' component={Link} to="/ToBeMade"><img src="/icons/icons8-search-purple.svg" alt="closet search"></img></Button>
		</div>
		<ul>
			<NavButton name={'CLOTHES'} link={"/closet"} page={closetPage}/>
			<NavButton name={'OUTFITS'} link={"/locker"} page={lockerPage}/>
		</ul>
	</div>);
}

export default PageNav;