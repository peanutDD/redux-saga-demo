import {FETCH_USER_REQUEST, FETCH_USER_SUCCESSED, FETCH_USER_FAILUER} from '../constants'

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  user: null
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
const users = (state = INITIAL_STATE, action= {} ) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        isFetching: true,
        error: null,
        user: null
      };
    case FETCH_USER_SUCCESSED:
      return {
        isFetching: false,
        error: null,
        user: action.user
      }
    case FETCH_USER_FAILUER:
      return {
        isFetching: false,
        error: action.error,
        user: null
      }
    default:
      return state;
  }
};

export default users;