import * as actionTypes from './actionTypes'
import axios from 'utils/api'

export const authSuccess = token => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    accessToken: token
  }
}

export const authFailure = error => {
  return {
    type: actionTypes.SIGNIN_FAILURE,
    error: error
  }
}

export const signOut = () => {
  localStorage.removeItem('token')
  return {
    type: actionTypes.AUTH_SIGNOUT
  }
}

export const signIn = (email, password) => {
  return dispatch => {
    const authData = {
      email: email,
      password: password
    }
    axios
      .post('/auth/sessions', authData)
      .then(response => {
        localStorage.setItem('token', response.data.auth_token)
        dispatch(authSuccess(response.data.auth_token))
      })
      .catch(error => {
        dispatch(authFailure(error.response.data.error))
      })
  }
}

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')

    if (!token || token === '') {
      return
    }

    axios
      .get('/auth/me', { headers: { Authorization: `bearer ${token}` } })
      .then(response => {
        dispatch(authSuccess(token))
      })
      .catch(error => {
        dispatch(signOut())
      })
  }
}
