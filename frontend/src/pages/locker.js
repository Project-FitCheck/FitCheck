import '../styles/MainPage.css';
import PageNav from '../components/PageNav.jsx';
import Outfits from '../components/Outfits.jsx';

function Locker() {
	return <div className='MainPage'>
		<PageNav page={'outfit'}/>
		<Outfits />
	</div>
}

export default Locker;