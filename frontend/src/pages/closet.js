import '../styles/MainPage.css';
import PageNav from '../components/PageNav.jsx';
import Clothes from '../components/Clothes.jsx';
import NavBar from '../components/navbar.js';

function Closet() {
	return (
		<div className='MainPage'>
			<NavBar page="home" />
			<PageNav page={'clothes'} />
			<Clothes />
		</div>)
}

export default Closet;