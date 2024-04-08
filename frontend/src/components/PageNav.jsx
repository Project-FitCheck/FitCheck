import React from 'react';
import '../styles/PageNav.css';
import '../styles/Highlight.css';
import NavButton from './NavButton';

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
			<a href="/closet/add"><button className='addClothes'>+</button></a>
			<a href="/ToBeMade"><button className='searchButton'><img src="/icons/icons8-search-purple.svg" alt="closet search"></img></button></a>
		</div>
		<ul>
			<NavButton name={'CLOTHES'} link={"/closet"} page={closetPage}/>
			<NavButton name={'OUTFITS'} link={"/locker"} page={lockerPage}/>
		</ul>
	</div>);
}

export default PageNav;