const initialState = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    user_image_url: '',
    location: '',
    date_joined: '',
    things_i_love: '',
    descriptions: '',
}

export const profileReducer =
  (state = initialState, action) => {
    if (action.type === "storeUserData") {
      const newState = { ...state };
      const newUser = action.payload;
      newState.username = newUser.username;
      newState.email = newUser.email;
      newState.first_name = newUser.first_name;
      newState.last_name = newUser.last_name;
      newState.user_image_url = newUser.user_image_url;
      newState.location = newUser.location;
      newState.date_joined = newUser.date_joined;
      newState.things_i_love = newUser.things_i_love;
      newState.descriptions = newUser.descriptions;
      console.log(newState);
      return newState;
  
    }
    //console.log(state);
    return state;
}



