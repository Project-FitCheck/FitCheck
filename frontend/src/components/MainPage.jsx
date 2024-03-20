<<<<<<< HEAD
import '../styles/MainPage.css';
=======
import '../CSS/MainPage.css';
>>>>>>> 39bcb2d (Added components and homepage (#30))
import PageNav from '../components/PageNav.jsx';
import Clothes from '../components/Clothes.jsx';
import Outfits from '../components/Outfits.jsx';


function MainPage(props) {
	return <div className='MainPage'>
		<PageNav />
		<Clothes />
	</div>
}

export default MainPage;