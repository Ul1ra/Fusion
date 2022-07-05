import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import NavBar from '../../components/NavBar/navBar';
import RestaurantFeed from '../../components/RestaurantFeed/restaurantFeed';

import '../../Variables/page.scss'
import '../../Styles/Landingpage.scss';

const LandingPage = () => {

  const navigate = useNavigate();
  const [target, setTarget] = useState('');

  const searchClickHandler = () => {
    console.log(target);
  }
    
  return (
    <>
    <div id="Page">
      <NavBar />
      <div id="main">
        <div className='Container'>
          <div className='header'>    
            <div className='search'>
              <input className='inputbar' type="text" placeholder='Search...' onChange={e => setTarget(e.target.value)}></input>
              <button className='medium-button' onClick={() => { navigate('/restaurants/') }}>Search</button>
            </div>
          </div>

          <h3 className='title-h3'>BEST RATED RESTAURANTS</h3>

          <div className='restaurants-container'>
            <RestaurantFeed numberOfRestaurants='4'/>
          </div>

          <button className='medium-button' onClick={() => { navigate('/restaurants/new') }}>new restaurant</button>
        </div>
      </div>
      <Footer />
    </div>
    </>
)
}
export default LandingPage;