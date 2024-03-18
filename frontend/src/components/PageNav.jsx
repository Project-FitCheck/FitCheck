import React from 'react';
import '../CSS/PageNav.css';
import '../CSS/Highlight.css';
import NavButton from './NavButton';

function PageNav(props) {
	let closetPage = false;
	let lockerPage = false;
	if (props.page === 'clothes') {
		closetPage = true;
	} else {
		lockerPage = true;
	}

	return (<div className='PageNav'>
		<div className='PageNavButtons'>
			<a href="/add_clothing"><button className='addClothes'>+</button></a>
			<a href=""><button className='searchButton'>Srch</button></a>
		</div>
		<ul>
			<NavButton name={'Clothes'} link={"/closet"} page={closetPage}/>
			<NavButton name={'Outfits'} link={"/locker"} page={lockerPage}/>
		</ul>
	</div>);
}

export default PageNav;