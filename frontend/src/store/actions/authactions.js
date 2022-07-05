export const fetchAndDispatchToken = (dispatch, getState, username, password, email, navigate) => {
  //const url = 'http://127.0.0.1:8000/backend/api/auth/token/';
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/auth/token/';
  const method = 'POST';
  const headers = new Headers({'Content-type':'application/json'});
  let body = {username,password,email};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    if (data.access) {
      dispatch({ type: 'setToken', payload: data });
      localStorage.setItem('token', data.access);
      navigate('/');
  }
})
}

export const registerEmail = (dispatch, getState, email, navigate) => {
  //const url = 'http://127.0.0.1:8000/backend/api/auth/registration/';
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/auth/registration/';
  const method = 'POST';
  const headers = new Headers({'Content-type':'application/json'});
  let body = {email};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url, config)
    .then(response => response.json())
    .then(
         data => {
      console.log(data)
      navigate('/registration')
  }
//}
)
}

export const finishRegistration = (dispatch, getState, email, username, password, validation_code, location, password_repeat, navigate) => {
  //const url = 'http://127.0.0.1:8000/backend/api/auth/registration/validation/';
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/auth/registration/validation/';
  const method = 'PATCH';
  const headers = new Headers({'Content-type':'application/json'});
  let body = {email,username,password,validation_code,location,password_repeat};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    // if (data.access){
    //   dispatch({ type: 'setToken', payload: data });
    //   localStorage.setItem('token', data.access);
      navigate('/login');
  }
//}
)
}

