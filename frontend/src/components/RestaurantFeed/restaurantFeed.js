import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndDispatchRestaurants } from '../../store/actions/restaurantactions'
import { useNavigate } from 'react-router-dom';
import resto from '../../assets/Gucci.jpg'
import '../../Styles/RestaurantFeed.scss'
import star from '../../assets/star.svg'
import full_star from '../../assets/full_star.svg'
import '../../Styles/ReviewsCard.css';



function RestaurantFeed(props) {

  // const restaurantItem_local = {  // TO BE DELETED *************************************************************
  //   id: 1,
  //   name: "Gucci",
  //   street: "Quellenstrasse 6", 
  //   zip: "8005",
  //   city: "Zürich",
  //   country: "Switzerland",
  //   rating: 5,
  //   nbr_of_review: 65,
  //   restaurant_image: resto,
  // }


  
  const selector = reduxState => reduxState.restaurantReducer.restaurants;
  const reduxState = useSelector(selector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  console.log(reduxState);
  const allItems = reduxState.slice(0, props.numberOfRestaurants);

  useEffect(() => {
    dispatch((dispatch, getState) => fetchAndDispatchRestaurants(dispatch, getState));
  },
    []);
  
  const handleOnClick = (e) => {
    console.log(e.target.value)
  }
  
  return (
    <>
      {
      allItems.map((restaurantItem, index) =>
        <li className="restaurant-container" key={restaurantItem.id} onClick={()=>{navigate(`/restaurants/${restaurantItem.id}`)}}>
          <p></p>
          <p className="restaurant-container_name">{restaurantItem.name}</p>
          <p className="restaurant-container_address">{restaurantItem.street}, {restaurantItem.zip} {restaurantItem.city}</p>
          <div className="restaurant-container_ratings">
            <div className="restaurant-container_rating_stars">
              <img className="restaurant-container_image_star" src={full_star} alt={restaurantItem.name}/>
              <img className="restaurant-container_image_star" src={full_star} alt={restaurantItem.name}/>
              <img className="restaurant-container_image_star" src={full_star} alt={restaurantItem.name}/>
              <img className="restaurant-container_image_star" src={star} alt={restaurantItem.name}/>
              <img className="restaurant-container_image_star" src={star} alt={restaurantItem.name}/>
            </div>
            <p className="restaurant-container_rating">{restaurantItem.nbr_of_review}  </p>
          </div>
          <p></p>
          <img className="restaurant-container_image_restaurant" src={restaurantItem.restaurant_image_url} alt={restaurantItem.name}/>
        </li>
        
      )
      }
    </>
  )
}

export default RestaurantFeed;