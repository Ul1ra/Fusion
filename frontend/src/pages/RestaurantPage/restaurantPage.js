import SearchBar from "../../components/SearchBar/searchBar";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAndDispatchRestaurant } from "../../store/actions/restaurantactions";
import pin from '../../assets/pin.svg'; 
import phone from '../../assets/phone.svg'; 
import web from '../../assets/web.svg'; 
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar";
import resto from '../../assets/Gucci.jpg';
import '../../Styles/restaurantPage.scss';
import empty_star from '../../assets/empty_star.svg'
import full_star from '../../assets/full_star.svg'



const RestaurantPage = () => {
  // let params = useParams();
  // let id = params.id - 1;

  const restaurantItem_local = {  // TO BE DELETED *************************************************************
    id: 1,
    name: "Gucci",
    street: "Quellenstrasse 6", 
    zip: "8005",
    city: "Zürich",
    country: "Switzerland",
    rating: 5,
    nbr_of_review: 65,
    restaurant_image: resto,
  }


  let id = useParams().id;

  console.log(id);
  console.log("hEEEEEEEE")

  
  const selector = reduxState => reduxState.restaurantReducer;
  const reduxState = useSelector(selector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restaurant = reduxState;
  const name = restaurant.name;
  const category = restaurant.category;
  const country = restaurant.country;
  const street = restaurant.street;
  const phone = restaurant.phone;
  const website = restaurant.website;

  useEffect(() => {
    dispatch((dispatch, getState) => fetchAndDispatchRestaurant(dispatch, getState, id));
  },
    []);

  console.log(reduxState);

  return (
    <>
    <div id="Page">
      <NavBar />
        <div className="restaurant_page">
          <div className="restaurant_page_upper_part" style={{ backgroundImage: `url(${resto})` }}>
            {/* <img className="header restaurant_page_image" src={restaurantItem_local.restaurant_image} alt={restaurantItem_local.name}/> */}
            <div className="restaurant_page_black_box">
              <div className="restaurant_page_name_ratings">
                <h1 className="restaurant_page_name">{restaurantItem_local.name}</h1>
                <div className="restaurant-container_ratings">
                    <div className="restaurant-container_rating_stars">
                      <img className="restaurant-container_image_star" src={full_star} alt={restaurantItem_local.name}/>
                      <img className="restaurant-container_image_star" src={full_star} alt={restaurantItem_local.name}/>
                      <img className="restaurant-container_image_star" src={full_star} alt={restaurantItem_local.name}/>
                      <img className="restaurant-container_image_star" src={empty_star} alt={restaurantItem_local.name}/>
                      <img className="restaurant-container_image_star" src={empty_star} alt={restaurantItem_local.name}/>
                    </div>
                    <p className="restaurant-container_rating">{restaurantItem_local.nbr_of_review} reviews  </p>
                </div>
              </div>
          </div>
        </div>
          <h2>{name}</h2>
          <h3>{category}</h3>
          <h3>{country}</h3>
          <div className="contact-card">
          <img className="icon" src={pin}/>{street}
          <img className="icon" src={phone}/> {phone}
          <img className="icon" src={web}/> {website}
        </div>
    </div>
    <Footer />
    </div>
    </>
)
}
export default RestaurantPage;