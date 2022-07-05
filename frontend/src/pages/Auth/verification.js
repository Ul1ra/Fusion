import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { withRouter, Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import NavBar from '../../components/NavBar/navBar';
import { finishRegistration } from '../../store/actions/authactions';
import '../../Styles/verification.scss';

const Verification = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validation_code, setCode] = useState('');
  const [location, setLocation] = useState('');
  const [password_repeat, setPasswordRepeat] = useState('');

  const finishRegistrationClickHandler = () => {
    dispatch((dispatch, getState) => finishRegistration(dispatch, getState, email, username, password, validation_code, location, password_repeat, navigate));
  }

  return (
    <div id="Page">
      <NavBar />
      <div id="main"></div>
    <div className='container'>
      <h1>VERIFICATION</h1>
        <div className='input-block'>
          <div className='input'>
            <div className='input-left'>
            <input
              className="input-field-user"
              type='email'
              placeholder='E-mail address'
              value={email}
              name='email'
              onChange={e => setEmail(e.target.value)}
            />
            
            <input
              className="input-field-user"
              type='text'
              placeholder='Username'
              value={username}
              name='username'
              onChange={e => setUsername(e.target.value)}
            />
            
            <input
              className="input-field-user"
              type='password'
              placeholder='Password'
              value={password}
              name='password'
              onChange={e => setPassword(e.target.value)}
            />
            </div>
            <div className='input-right'>
            <input
              className="input-field-user"
              type='text'
              placeholder='Validation code'
              value={validation_code}
              name='code'
              onChange={e => setCode(e.target.value)}
            />
              
            <input
              className="input-field-user"
              type='text'
              placeholder='Location'
              value={location}
              name='location'
              onChange={e => setLocation(e.target.value)}
          />
          
            <input
              className="input-field-user"
              type='password'
              placeholder='Password repeat'
              value={password_repeat}
              name='passwordRepeat'
              onChange={e => setPasswordRepeat(e.target.value)}
            />
          </div>
          </div>
        </div>
    
          <div className='button-container'>
            <button className='button-medium' onClick={finishRegistrationClickHandler}>
              Finish Registration
            </button>         
          </div>
    </div>
    <Footer />
    </div>

  )
}

export default Verification;