export const getUserData = (dispatch, getState) => {
  //const url = 'http://127.0.0.1:8000/backend/api/users/me/';
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/auth/me/';
  const method = 'GET';
  const token = localStorage.getItem("token"); 
  const headers = new Headers({ 'Authorization': `Bearer ${token}` });
  // const headers = new Headers({'Content-type':'application/json'});
  // let body = {email};
  // body = JSON.stringify(body);    
  const config = {method,headers}
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    if (data) {
      dispatch({ type: 'storeUserData', payload: data });
      //localStorage.setItem('token', data.access);
      // navigate('/');
      console.log(data);
  }
})
}