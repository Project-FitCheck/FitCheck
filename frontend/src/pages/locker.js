import '../styles/MainPage.css';
import PageNav from '../components/PageNav.jsx';
import Outfits from '../components/Outfits.jsx';
import NavBar from '../components/navbar.js';

function Locker() {
	return <div className='MainPage'>
		<NavBar page="home"/>
		<PageNav page={'outfit'} />
		<Outfits />
	</div>
}

export default Locker;