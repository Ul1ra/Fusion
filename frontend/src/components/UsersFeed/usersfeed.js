import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndDispatchUsers} from '../../store/actions/useractions'
import { useNavigate } from 'react-router-dom';
import { fetchAndDispatchComments } from '../../store/actions/reviewactions';
import '../../Styles/UsersCard.css'
import user from '../../assets/user.png'; 

const UsersFeed = () => {
  
  const selector = reduxState => reduxState.usersReducer;
  const reduxState = useSelector(selector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const allUsers = reduxState.users;

  console.log(allUsers);

  // const reviewComments = allComments.filter(item => item.commented_restaurantreview.id = item.id)

  useEffect(() => {
    dispatch((dispatch, getState) => fetchAndDispatchUsers(dispatch, getState));
  },
    []);
  
  return (
    <>
      {allUsers.map((item, index) =>
        <li className="review-container" key={item.id}>
          {item.user_image_url ?
            <img className="user-image" src={item.user_image_url} alt={item.id} />
            : <img className="user-image" src={user} />}
          {item.first_name ? item.first_name : item.name} 
          {item.first_name ? item.last_name[0] : null} 
          {item.descriptions}
        </li>
      )}
    </>
  )
}

export default UsersFeed;