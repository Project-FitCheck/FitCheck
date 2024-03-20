import '../styles/MainPage.css';
import PageNav from '../components/PageNav.jsx';
import Clothes from '../components/Clothes.jsx';

function Closet() {
	return <div className='MainPage'>
		<PageNav page={'clothes'}/>
		<Clothes />
	</div>
}

export default Closet;