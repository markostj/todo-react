import { actionTypes } from "./postsTypes";

export const getPostsActions = {
  postsRequest: () => ({
    type: actionTypes.postsRequest,
    payload: {}
  }),

  postsSuccess: posts => ({
    type: actionTypes.postsSuccess,
    payload: { posts }
  }),

  postsError: error => ({
    type: actionTypes.postsError,
    payload: { error }
  })
};
