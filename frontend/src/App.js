import './Styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import withAuth from './components/withAuth';
import React from 'react';
import withAuth from './components/withAuth';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/signup';
import Registration from './pages/Auth/registration';
import Verification from './pages/Auth/verification';

import LandingPage from './pages/LandingPage/landingPage';
import Restaurants from './pages/Restaurants/restaurants';
import RestaurantPage from './pages/RestaurantPage/restaurantPage';
import NewRestaurant from './pages/NewRestaurant/newRestaurant';

import Reviews from './pages/Reviews/reviews';
import Users from './pages/Users/users';
import NavBar from './components/NavBar/navBar';
import Search from './pages/Search/search';
import Profile from './pages/Profile/profile';
import Footer from './components/Footer/footer';


// const AuthenticatedProfile = withAuth(Profile)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/verification" element={<Verification />} />

        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/restaurants/new" element={<NewRestaurant />} />

        <Route path="/reviews" element={<Reviews />} />
        <Route path="/users" element={<Users />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
