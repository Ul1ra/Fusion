const initialState = {
  reviews: [],
  comments: []
}

export const reviewsReducer = (state=initialState,action) => {
  if (action.type === "setReviews") {
    if (state.reviews === action.payload) {
      return state;
    }
    else {
      const newState = { ...state };
      const newReviews = action.payload;
      newState.reviews = newReviews;
      return newState;
    }
  } 
  else if (action.type === "setComments") {
    if (state.comments === action.payload) {
      return state;
    }
    else {
      const newState = { ...state };
      const newComments = action.payload;
      newState.comments = newComments;
      return newState;
    }
   }
  else return state;
  }