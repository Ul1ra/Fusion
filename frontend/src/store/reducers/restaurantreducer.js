const initialState = {
  restaurants: [],
    name: '',
    restaurant_image: '',
    category: '',
    country: '',
    street: '',
    city: '',
    zip: '',
    website: '',
    phone: '',
    e_mail: '',
    opening_hours: '',
    price_level: '',
}

export const restaurantReducer = (state=initialState,action) => {
  if (action.type === "setRestaurants") {
    if (state.restaurants === action.payload) {
      return state;
    }
    else {
      const newState = { ...state };
      const newRestaurants = action.payload;
      newState.restaurants = newRestaurants;
      return newState;
    }
  }
  else if (action.type === "setRestaurant") {
    if (state.restaurant === action.payload) {
      return state;
    }
    else {
      const newState = { ...state };
      const newRestaurant = action.payload;
      newState.name = newRestaurant.name;
      newState.restaurant_image = newRestaurant.restaurant_image;
      newState.category = newRestaurant.category;
      newState.country = newRestaurant.country;
      newState.street = newRestaurant.street;
      newState.city = newRestaurant.city;
      newState.zip = newRestaurant.zip;
      newState.website = newRestaurant.website;
      newState.phone = newRestaurant.phone;
      newState.e_mail = newRestaurant.e_mail;
      newState.opening_hours = newRestaurant.opening_hours;
      newState.price_level = newRestaurant.price_level;
      return newState;
    }
   }
  else return state;
  }