import { actionTypes } from "./todosTypes";

export const getTodosActions = {
  todosRequest: () => ({
    type: actionTypes.todosRequest,
    payload: {}
  }),

  todosSuccess: todos => ({
    type: actionTypes.todosSuccess,
    payload: { todos }
  }),

  todosError: error => ({
    type: actionTypes.todosError,
    payload: { error }
  })
};
