import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndDispatchRestaurants } from '../../store/actions/restaurantactions'
import { getUserData } from '../../store/actions/profileactions';
import { useNavigate } from 'react-router-dom';
import star from '../../assets/star.svg'; 
import comment from '../../assets/comment.svg'; 
import restaurant from '../../assets/restaurant.svg'; 
import edit from '../../assets/edit.svg'; 
import NavBar from '../../components/NavBar/navBar';
import Footer from '../../components/Footer/footer';
import '../../Styles/profile.scss';
import profilepic from '../../assets/me.jpg';


const Profile = () => {
  
  const selector = reduxState => reduxState.profileReducer;
  const reduxState = useSelector(selector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // console.log(reduxState);
  const profile = reduxState;

  useEffect(() => {
    dispatch((dispatch, getState) => getUserData(dispatch, getState));
  },
    []);

//   const profile = {
//     name: 'Name',
//     email: 'email@gmail.com',
//     // avatar: '',
//     first_name: 'First',
//     last_name: 'Last',
//     comments: ['comment1', 'comment2'],
//     reviews: ['review1', 'review2'],
//     restaurants: ['restaurant1'],
//     location: 'Zürich',
//     joined_date: '09.2021',
//     interests: 'interests',
//     description: 'description of myself',
// }
  
  const handleOnClick = (e) => {
    console.log(e.target.value)
  }
  
  return (
    <>  
    <div id="Page">
      <NavBar />
        <div id="main">
        <div className='header'></div>
          <div className='profile-container'>
            <div className='profile-left-container'>
              <img className='profile-pic' src={profile.user_image_url} />
              <div className='left-profile'>
              <p className='profile-title'>{profile.first_name}'s profile</p>
              <div className='box' tabIndex='1'>
                <img className="star" src={star} />
                <p>Reviews</p>
              </div>
              <div className='box' tabIndex='1'>
                <img className="comment" src={comment} />
                <p>Comments</p>
              </div>
              <div className='box' tabIndex='1'>
                <img className="restaurant" src={restaurant} />
                <p>Restaurants</p>
              </div>
              <div className='box' tabIndex='1'>
                <img className="edit" src={edit} />
                <p>Edit profile</p>
              </div>
              </div>
            </div>

            <div className='profile-middle-container'>
              <div className='profile-box-1'>
                <h3>{profile.first_name} {profile.last_name[0]}.</h3>
                <p>{profile.location}</p>
                {/* <p>{profile.reviews.length} reviews</p>
                <p>{profile.comments.length} comments</p> */}
              </div>
              
              <div className='review-box'>
              <button className='medium-button' onClick={() => { navigate('/restaurants/new') }}>new restaurant</button>
              </div>
              
            </div>

            <div className='profile-right-container'>
              <div className='empty'></div>
              <h4>ABOUT {profile.first_name.toUpperCase()}</h4>
              <h5>Location</h5>
              <p>{profile.location}</p>
              <h5>Luna member since</h5>
              <p>{profile.date_joined}</p>
              <h5>Things I love</h5>
              <p>{profile.interests}</p>
              <h5>Description</h5>
              <p>{profile.descriptions}</p>
            </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Profile;