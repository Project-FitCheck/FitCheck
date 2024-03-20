<<<<<<< HEAD
import '../styles/MainPage.css';
=======
import '../CSS/MainPage.css';
>>>>>>> 39bcb2d (Added components and homepage (#30))
import PageNav from '../components/PageNav.jsx';
import Outfits from '../components/Outfits.jsx';


function Locker() {
	return <div className='MainPage'>
		<PageNav page={'outfit'}/>
		<Outfits />
	</div>
}

export default Locker;