import SearchBar from "../../components/SearchBar/searchBar";
import { Link } from "react-router-dom";
import ReviewsFeed from "../../components/ReviewsFeed/reviewFeed";

import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar"

const Reviews = () => {


return (
  <div id="Page">
    <NavBar />
    <SearchBar />

    <div id="main">
      <ReviewsFeed/>
    </div>
    
    <Footer />
  </div>
  
)
}
export default Reviews;