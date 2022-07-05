import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/searchBar";
import RestaurantFeed from "../../components/RestaurantFeed/restaurantFeed";
import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";
import '../../Styles/NewRestaurant.css';
import { dispatchRestaurant } from '../../store/actions/restaurantactions';


const NewRestaurant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image_name, setImageName] = useState();
  const [name, setName] = useState('');
  const [category, setCategory] = useState(1);
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [e_mail, setEmail] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [price_level, setPriceLevel] = useState('');
  const [restaurant_image, setImages] = useState([]);

  const newRestaurantClickHandler = (e) => {
    e.preventDefault();
    dispatch((dispatch, getState) =>
      dispatchRestaurant(dispatch, getState, name, category, country, street, city, zip, website, phone, e_mail, opening_hours, price_level, restaurant_image, navigate));
  }

  const handleUpload = (e) => {
    const imageUrl = e.target.files;
    const imageUrls = URL.createObjectURL(imageUrl[0])
    setImages(imageUrl);
    console.log(imageUrls)
  }

  return (
    <>
    <div id="Page">
      <NavBar />
      <div id="main">
      <h1>CREATE NEW RESTAURANT</h1>
      <form>
        
        <p className='title'>Basic</p>
          <div className='new-rest-container'>
            <div className='input'>
              <p className='label'>Name *</p>
            <input
              className='input-field' 
              type='text'
              value={name}
              name='name'
              onChange={e => setName(e.target.value)}
              required
            />
            <p className='font-required'>This field is required</p>
            </div>  
              
          <div className='input'>
            <p className='label'>Category *</p>
                <select className='input-field' onChange={e => setCategory(e.target.value)}>
              <option value="default" disabled hidden>Select a value...</option>
                  <option value={1}>Mediterranean Cuisine</option>
              <option value={2}>French Cuisine</option>
              <option value={3}>Japanese Cuisine</option>
              <option value={4}>Italian Cuisine</option>
              <option value={5}>Greek Cuisine</option>
              <option value={6}>Spanish Cuisine</option>
            </select>
            <p className='font-required'>This field is required</p>
          </div>
                     
          <div className='input'>
            <p className='label'>Country *</p>
            <input
              className='input-field'
              type='text'
              value={country}
              name='country'
              onChange={e => setCountry(e.target.value)}
              required
            />
          </div>

        </div>        
        <p className='title'>Address</p>
        <div className='new-rest-container'>
          <div className='input'>
          <p className='label'>Street *</p>
            <input
              className='input-field'
              type='text'
              value={street}
              name='street'
              onChange={e => setStreet(e.target.value)}
              required
            />
          </div>
            
          <div className='input'>
          <p className='label'>City *</p>
            <input
              className='input-field'
              type='text'
              value={city}
              name='city'
              onChange={e => setCity(e.target.value)}
              required
            />
          </div>

          <div className='input'>
          <p className='label'>Zip</p>
            <input
              className='input-field'
              type='text'
              value={zip}
              name='zip'
              onChange={e => setZip(e.target.value)}
              required
            />
          </div>
        </div>  
              
        <p className='title'>Contact</p>
          <div className='new-rest-container'>
            <div className='input'>
            <p className='label'>Website</p>
            <input
              className='input-field'
              type='text'
              value={website}
              name='website'
              onChange={e => setWebsite(e.target.value)}
              required
            />
          </div>

          <div className='input'>
          <p className='label'>Phone *</p>
            <input
              className='input-field'
              type='text'
              value={phone}
              name='phone'
              onChange={e => setPhone(e.target.value)}
              required
            />
          </div>


          <div className='input'>
          <p className='label'>Email</p>
            <input
              className='input-field'
              type='text'
              value={e_mail}
              name='e_mail'
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>    
          
        </div>  
        <p className='title'>Details</p>      
        <div className='new-rest-container'>
          <div className='input'>
          <p className='label'>Opening hours *</p>
            <input
              className='input-field'
              type='text'
              value={opening_hours}
              name='opening_hours'
              onChange={e => setOpeningHours(e.target.value)}
              required
            />
          </div>    
          
          <div className='input'>
          <p className='label'>Price Level</p>
          
          <select className='input-field' onChange={e => setPriceLevel(e.target.value)}>
            <option value="default" disabled hidden>Select a value...</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
          </div>    
                
          <div className='input'>
                <input multiple className="my-image" type="file" accept="image/*" onChange={handleUpload}>
          </input>
          </div>
        </div> 
         
        <div className='button-container'>
        <button type='onSubmit' className='button-medium' onClick={newRestaurantClickHandler}>
              Create
        </button>         
      </div>
    </form>
    </div>
    <Footer />
    </div>
  </>
)
}
export default NewRestaurant;