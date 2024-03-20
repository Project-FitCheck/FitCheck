import React from 'react';
<<<<<<< HEAD
import '../styles/PageNav.css';
import '../styles/Highlight.css';
=======
import '../CSS/PageNav.css';
import '../CSS/Highlight.css';
>>>>>>> 39bcb2d (Added components and homepage (#30))
import NavButton from './NavButton';

function PageNav(props) {
	let closetPage = false;
	let lockerPage = false;
	if (props.page === 'clothes') {
		closetPage = true;
	} else if (props.page === 'outfits') {
		lockerPage = true;
	}

	return (<div className='PageNav'>
		<div className='PageNavButtons'>
			<a href="/closet/add"><button className='addClothes'>+</button></a>
			<a href=""><button className='searchButton'>Srch</button></a>
		</div>
		<ul>
			<NavButton name={'CLOTHES'} link={"/closet"} page={closetPage}/>
			<NavButton name={'OUTFITS'} link={"/locker"} page={lockerPage}/>
		</ul>
	</div>);
}

export default PageNav;