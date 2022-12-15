import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
} from "../../constants";


const getCurrentUser = (text, inputLanguage, outputLanguage) => ({
  type: GET_CURRENT_USER,
  text,
  inputLanguage,
  outputLanguage,
});

export const getCurrentUserFailed = (error) => ({
  type: GET_CURRENT_USER_FAILED,
  payload: error,
});

export const getCurrentUserSuccess = (data) => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: data,
});

export default getCurrentUser;
