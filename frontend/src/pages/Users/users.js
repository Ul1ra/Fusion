import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar"
import SearchBar from "../../components/SearchBar/searchBar";
import UsersFeed from "../../components/UsersFeed/usersfeed";
import { Link } from "react-router-dom";
import '../../Styles/users.scss';

const Users = () => {


return (
  <div id="Page">
    <NavBar />
    <div className='navigation-bar'>
        <div className='link-container'>
          <Link className='link' to='/restaurants' tabIndex='1' >RESTAURANTS</Link>
        </div>
        
        <div className='link-container'>
          <Link className='link' to='/reviews' tabIndex='1'>REVIEWS</Link>
        </div>
        
        <div className='link-container'>
          <Link className='link' to='/users' tabIndex='1'>USERS</Link>
        </div>
      </div>
    <div id="main">
      <div className="user-container">
        <UsersFeed/>
        </div>  
    </div>
    <Footer />
  </div>
)
}
export default Users;