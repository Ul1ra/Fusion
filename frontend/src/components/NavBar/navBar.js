import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

import '../../Styles/navBar.scss'

const NavBar = () => {

  const navigate = useNavigate();

  
    return(

        <div className="nav-bar">
            <div className='left'>
                <div className='logo-container'>
                    <img src={logo} alt='no-img' onClick={()=>{navigate('/')}}></img>
                </div>
            </div>
            <div className='middle'>
              <div className='link-container'>
                <Link className='link' to='/' tabIndex='1'>Home</Link>
              </div>
              <div className='link-container'>
                <Link className='link' to='/restaurants' tabIndex='1'>Search</Link>
              </div>
              <div className='link-container'>
                <Link className='link' to='/profile' tabIndex='1'>Profile</Link>
              </div>
            </div>
            <div className='right'>
              <div className='button-container'>
              <Link className='link-signup' to='/signup'>SIGNUP</Link>
              <Link className='link-login' to='/login'>LOGIN</Link>
              </div>

            </div>    
          
        </div>
    )
}

export default NavBar;