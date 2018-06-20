import {FETCH_USER_REQUEST, FETCH_USER_SUCCESSED} from '../constants';

export const get_user = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};


export const get_user_successed = () => {
  return {
    type: FETCH_USER_SUCCESSED
  };
};