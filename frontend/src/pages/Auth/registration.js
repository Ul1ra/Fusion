import React, { useEffect, useHistory } from 'react'
import { fetchAndDispatchToken, registerEmail } from '../../store/actions/authactions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { withRouter, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/navBar';
import Footer from '../../components/Footer/footer';
import '../../Styles/registration.scss';

function Registration() {

  setTimeout(function(){ window.location="/verification"; },5000);

    return (
      <div id="Page">
      <NavBar />
        <div id="main">
          <div className='container'>
            <p>Thanks for your registration. 
                Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvenience.
            </p>
          </div>
        </div>
      <Footer />
    </div>
    )
  }

export default Registration;