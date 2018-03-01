import * as actionTypes from './actionTypes'
import axios from '../../utils/api'

export const authSuccess = (token) => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    accessToken: token
  }
}

export const authFailure = (error) => {
  return {
    type: actionTypes.SIGNIN_FAILURE,
    error: error
  }
}

export const signIn = (email, password) => {
  return dispatch => {
    const authData = {
      email: email,
      password: password
    }
    axios
      .post('http://localhost:3000/api/v1/auth/sessions', authData)
      .then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.auth_token)
        dispatch(authSuccess(response.data.auth_token))
      })
      .catch(error => {
        dispatch(authFailure(error.response.data.error))
      })
  }
}
