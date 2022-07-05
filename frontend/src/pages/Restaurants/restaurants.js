import SearchBar from "../../components/SearchBar/searchBar";
import RestaurantFeed from "../../components/RestaurantFeed/restaurantFeed";
import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";
import '../../Styles/restaurants.scss';

const Restaurants = () => {


  return (
    <>
    <div id="Page">
      <NavBar />
      <div id="main">
          <SearchBar />
          

      <div className='restaurants-container'>
        <RestaurantFeed numberOfRestaurants='10'/>
      </div>

      </div>
      <Footer />
    </div>
    </>
)
}
export default Restaurants;