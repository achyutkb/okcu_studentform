import axios from 'axios';
import { push } from 'connected-react-router';

import { loginSuccess, loginFailure, logoutSuccess } from '../actions/authAction';
import { API_URL, FULL_NAME, JWT_TOKEN, LOGIN_EMAIL } from '../config/config';
import { setLocalStorage, clearLocalStorage } from '../utils/storageUtil';

export const login = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(API_URL + 'auth/login', { email, password })
      .then((response) => {
        dispatch(loginSuccess(response.data.token));
        setLocalStorage(JWT_TOKEN, response.data.token);
        setLocalStorage(LOGIN_EMAIL, response.data.email);
        setLocalStorage(FULL_NAME, response.data.name);
        dispatch(push('/dashboard'));
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    clearLocalStorage(JWT_TOKEN);
    dispatch(logoutSuccess());
    dispatch(push('/'));
    return false;
  };
};
