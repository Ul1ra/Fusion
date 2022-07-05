export const fetchAndDispatchReviews = (dispatch, getState) => {
  //const url = 'http://127.0.0.1:8000/backend/api/reviews/';
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/reviews/';
  const method = "GET";
  const headers = new Headers({'Content-type':'application/json'});
  const config = {method,headers};
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    dispatch({ type: "setReviews", payload: data })
  })
}


export const fetchAndDispatchComments = (dispatch, getState) => {
  //const url = 'http://127.0.0.1:8000/backend/api/reviews/comments/';
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/reviews/comments/';
  const method = "GET";
  // const headers = new Headers({'Content-type':'application/json'});
  
  const token = localStorage.getItem("token"); 
  const headers = new Headers({ 'Authorization': `Bearer ${token}` });
  const config = {method,headers};
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    dispatch({ type: "setComments", payload: data })
    console.log(data)
  })
}

