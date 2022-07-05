const initialState = {
  token: undefined,
}

export const tokenReducer = (state = initialState, action) => {
  if (action.type === 'setToken') {
    const newState = { ...state };
    newState.token = action.payload.token;
    return newState;
  }
  else {
    return state;
  } 
}