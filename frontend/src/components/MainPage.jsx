import '../styles/MainPage.css';
import PageNav from '../components/PageNav.jsx';
import Clothes from '../components/Clothes.jsx';
//import Outfits from '../components/Outfits.jsx';


function MainPage(props) {
	return <div className='MainPage'>
		<PageNav />
		<Clothes />
	</div>
}

export default MainPage;