import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import facebook from '../../assets/facebook.svg'; 
import twitter from '../../assets/twitter.svg'; 
import googleplus from '../../assets/googleplus.svg'; 
import instagram from '../../assets/instagram.svg'; 
import '../../Styles/Footer.scss';

const Footer = () => {
  
    return(
      <div className="footer">
        <div className='top'>
            <div className='left'>
              <div className='link-container'>
                  <Link className='link' to='/aboutus' ><h3>About Us</h3></Link>
              </div>
              <div className='link-container'>
                      <Link className='link' to='/press' ><h3>Press</h3></Link>
              </div>
              <div className='link-container'>
                      <Link className='link' to='/blog' ><h3>Blog</h3></Link>
              </div>
              <div className='link-container'>
                      <Link className='link' to='/iOS' ><h3>iOS</h3></Link>
              </div>
              <div className='link-container'>
                      <Link className='link' to='/android' ><h3>Android</h3></Link>
              </div>
          
            </div>
            <div className='middle'></div>
            <div className='right'>
              <Link to='/facebook'><img src={facebook} alt='none'></img></Link>
              <Link to='/twitter'><img src={twitter} alt='none'></img></Link>
              <Link to='/googleplus'><img src={googleplus} alt='none'></img></Link>
              <Link to='/instagram'><img src={instagram} alt='none'></img></Link>
          </div>
        </div>
        <div className='bottom'>
          <p>© Copyright Luna 2022</p>
        </div>
      </div>
    )
}

export default Footer;