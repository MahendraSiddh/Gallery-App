import { Link } from 'react-router-dom';
import './Main.css';
import ImageCard from './components/ImageCard';
import collageIcon from './images/collageIcon.jpg';
import carouselIcon from './images/carouselIcon.png';
import scrollingIcon from './images/scrollingIcon.jpeg';
function Main(){
    
    return (
        <div className='main'>
           <div className='items '>
                <Link style={{textDecoration: 'none'}} to='./Collage' > <ImageCard title='Collage' image={collageIcon}  /> </Link>
                <Link style={{textDecoration: 'none'}} to='./Carouseler' > <ImageCard title='Carousel' image={carouselIcon} /> </Link>
                <Link style={{textDecoration: 'none'}} to='./Scrolling' > <ImageCard title='Staged Scrolling' image={scrollingIcon} /></Link>
           </div>
        </div>
    );
}
export default Main;