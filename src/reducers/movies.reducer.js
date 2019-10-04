// Action Types
import { CHANGE_MOVIES, CHANGE_FETCH_STATUS } from '../actionTypes';

const initialState = {
  data: [],
  isFetching: false
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MOVIES:
      return {
        ...state,
        data: action.payload
      };

    case CHANGE_FETCH_STATUS:
      return {
        ...state,
        isFetching: action.payload
      };

    default:
      return state;
  }
}
