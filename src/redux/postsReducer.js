import { actionTypes } from "./postsTypes";

const INITIAL_STATE = {
  posts: undefined,
  postsAreChanging: false,
  error: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.postsRequest:
      return {
        ...state,
        postsAreChanging: true,
        error: undefined
      };
    case actionTypes.postsSuccess:
      return {
        ...state,
        postsAreChanging: false,
        posts: action.payload.posts
      };
    case actionTypes.postsError:
      return {
        ...state,
        postsAreChanging: false,
        error: action.payload.error
      };
    default:
      return state || INITIAL_STATE;
  }
};
