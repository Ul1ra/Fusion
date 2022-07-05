import { useState } from 'react'
import { fetchAndDispatchToken, registerEmail } from '../../store/actions/authactions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { withRouter, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/navBar';
import Footer from '../../components/Footer/footer';
import "../../Styles/singup.scss";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');


  const signupClickHandler = () => {
    dispatch((dispatch, getState) => registerEmail(dispatch, getState, email, navigate));
    console.log('signed up')
  }

    return (
      <div id="Page">
      <NavBar />
        <div id="main">
        <div className='container-singup'>
          <div className='user-data'>
            <div className='singup-user-data'>
            <h1>REGISTRATION</h1>
            </div>
            
            <div className='input-block'>
              <div className='input'>
                <input
                  className='input-field-user'
                  type='email'
                  placeholder='E-mail address'
                  value={email}
                  name='email'
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='register-button-container'>
            <button className='button-medium' onClick={signupClickHandler}>
              Register
            </button>         
          </div>
          </div>
         
        </div>
      </div>
      <Footer />
      </div>
    )
  }

export default Signup;