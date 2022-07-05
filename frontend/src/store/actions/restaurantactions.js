import { Navigate } from "react-router-dom";

export const fetchAndDispatchRestaurants = (dispatch, getState) => {
  //const url = 'http://127.0.0.1:8000/backend/api/restaurants/';
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/restaurants/';
  const method = "GET";
  const headers = new Headers({'Content-type':'application/json'});
  const config = {method,headers};
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    dispatch({ type: "setRestaurants", payload: data })
  })
}


export const fetchAndDispatchRestaurant = (dispatch, getState, id) => {
  //const url = `http://127.0.0.1:8000/backend/api/restaurants/${id}/`;
  const url = `https://luna-team-2.propulsion-learn.ch/backend/api/restaurants/${id}/`;
  const method = "GET";
  const token = localStorage.getItem("token"); 
  const headers = new Headers({ 'Authorization': `Bearer ${token}` });
  const config = {method,headers};
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    dispatch({ type: "setRestaurant", payload: data })
    console.log(data);
  })
}

export const dispatchRestaurant = (dispatch, getState, name, category, country, street, city, zip, website, phone, e_mail, opening_hours, price_level, restaurant_image, navigate) => {
  //const url = 'http://127.0.0.1:8000/backend/api/restaurants/new/';
  console.log('name', name);
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/restaurants/new/';
  // const method = "POST";
  const token = localStorage.getItem("token"); 
  const formData = new FormData()
  formData.append('name', name)
  formData.append('category', category)
  formData.append('country', country)
  formData.append('street', street)
  formData.append('city', city)
  formData.append('zip', zip)
  formData.append('website', website)
  formData.append('phone', phone)
  formData.append('e_mail', e_mail)
  formData.append('opening_hours', opening_hours)
  formData.append('price_level', price_level)
  formData.append('restaurant_image', restaurant_image[0])

  console.log(formData);
  // const headers = new Headers({ 'Authorization': `Bearer ${token}` });
  // let body = {name, category, country, street, city, zip, website, phone, e_mail, opening_hours, price_level, images};
  const body = formData;
  console.log(body);
  // const config = {method,headers,body};
  const config = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body,                      
  };
  console.log(config);
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    //dispatch({ type: "setRestaurants", payload: data })
    // console.log(data);
    navigate('/');
  })
}