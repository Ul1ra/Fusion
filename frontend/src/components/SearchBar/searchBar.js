import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Styles/SearchBar.scss';

const SearchBar = () => {

  // const selector = reduxState => reduxState.currentPosts.posts;
  // const reduxState = useSelector(selector);
  // const dispatch = useDispatch();

  const [target, setTarget] = useState('');
  const [category, setCategory] = useState('');

  const search = () => {
    console.log(target);
  }
    
  return (
    <div className='search-container'>
    <div className='search-bar'>
      <div className='left-container'>
        <input className='inputbar' type="text" placeholder='Search' onChange={e => setTarget(e.target.value)}></input>
      </div>

      <div className='right-container'>
        <select className='selector' onChange={e => setCategory(e.target.value)}>
            <option value="1">Mediterranean Cuisine</option>
            <option value="2">French Cuisine</option>
            <option value="3">Japanese Cuisine</option>
            <option value="4">Italian Cuisine</option>
            <option value="5">Greek Cuisine</option>
            <option value="6">Spanish Cuisine</option>
        </select>
      </div>
    </div>
    <div className='navigation-bar'>
    <div className='link-container'>
      <Link className='link' to='/restaurants' tabIndex='1'>RESTAURANTS</Link>
    </div>
    
    <div className='link-container'>
      <Link className='link' to='/reviews' tabIndex='1'>REVIEWS</Link>
    </div>
    
    <div className='link-container'>
      <Link className='link' to='/users' tabIndex='1'>USERS</Link>
    </div>
  </div>
  </div>
     
  )
}

export default SearchBar;