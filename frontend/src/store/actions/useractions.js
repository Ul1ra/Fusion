export const fetchAndDispatchUsers = (dispatch, getState) => {
  //const url = 'http://127.0.0.1:8000/backend/api/users/all/';
  const url = 'https://luna-team-2.propulsion-learn.ch/backend/api/users/all/';
  const method = "GET";
  const headers = new Headers({'Content-type':'application/json'});
  const config = {method,headers};
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
    dispatch({ type: "setUsers", payload: data })
  })
}
