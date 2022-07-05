const initialState = {
  users: []
}

export const usersReducer = (state=initialState,action) => {
  if (action.type === "setUsers") {
    if (state.users === action.payload) {
      return state;
    }
    else {
      const newState = { ...state };
      const newUsers = action.payload;
      newState.users = newUsers;
      return newState;
    }
   }
  else return state;
  }