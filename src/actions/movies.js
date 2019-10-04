import {CHANGE_MOVIES, CHANGE_FETCH_STATUS} from "../actionTypes";

export default ({
  onChangeMovieData({data = [], dispatch}) {
    dispatch({type: CHANGE_MOVIES, payload: data});
  },
  onChangeMovieFetchStatus({status = false, dispatch}) {
    dispatch({type: CHANGE_FETCH_STATUS, payload: status});
  }
})
