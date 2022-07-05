import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndDispatchReviews} from '../../store/actions/reviewactions'
import { useNavigate } from 'react-router-dom';
import { fetchAndDispatchComments } from '../../store/actions/reviewactions';
import '../../Styles/ReviewsCard.css';
import thumbsup from '../../assets/thumbsup.png'; 



const ReviewsFeed = () => {
  
  const selector = reduxState => reduxState.reviewsReducer;
  const reduxState = useSelector(selector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const allReviews = reduxState.reviews;
  const allComments = reduxState.comments;



  const reviewComments = allComments.filter(item => item.commented_restaurantreview.id = item.id)

  console.log(allComments)

  useEffect(() => {
    dispatch((dispatch, getState) => fetchAndDispatchReviews(dispatch, getState));
    dispatch((dispatch, getState) => fetchAndDispatchComments(dispatch, getState));
    // dispatch((dispatch, getState) => fetchAndDispatchRestaurants(dispatch, getState));
    // dispatch((dispatch, getState) => fetchAndDispatchUsers(dispatch, getState));
  },
    []);
  
  return (
    <>
      {allReviews.map((item, index) =>
        <li className="review-container" key={item.id}>
          
          <div className='top-review-container'>
            <img className="user-image" src={item.reviewed_by.user_image_url} alt={item.id} />
            <div className='username-label'>
              <div className='username-name'>{item.reviewed_by.first_name} {item.reviewed_by.last_name[0]}.
              </div>
              <p>Reviews in total</p>
            </div>
          </div> 
          
          <div className='bottom-review-container'>
            <div className='retaurant-name'>{item.reviewed_restaurant.name}</div>
            <div>{item.text_content}</div>

            <div className='like-comment-container'>

            
            <div className='like-container'>
                <div className='thumbsup-container'>
                  <img className="thumbsup" src={thumbsup} />
                <p>Like</p> 
            </div>
            </div>
            <div className='comment-container'>
                <p>Comment</p>
            </div>
             </div>

            <div>Latest comments</div>

          </div>

          
               

        </li>
      )}
    </>
  )
}

export default ReviewsFeed;