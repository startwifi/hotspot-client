import * as actionTypes from './actionTypes'
import axios from 'utils/api'

export const createAdminStart = () => {
  return {
    type: actionTypes.CREATE_ADMIN_START
  }
}

export const createAdminSuccess = (admin) => {
  return {
    type: actionTypes.CREATE_ADMIN_SUCCESS,
    payload: admin
  }
}

export const createAdminFailure = (error) => {
  return {
    type: actionTypes.CREATE_ADMIN_FAILURE,
    payload: error
  }
}

export const createAdmin = (token, admin) => {
  const requestData = {
    data: {
      type: 'admins',
      attributes: {
        email: admin.email,
        firstName: admin.first_name,
        lastName: admin.last_name,
        password: admin.password
      }
    }
  }

  return dispatch => {
    dispatch(createAdminStart())
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    axios.post('/admins', requestData)
      .then( res => {
        dispatch(createAdminSuccess(res.data.data))
      } )
      .catch( error => {
        dispatch(createAdminFailure(error))
      } )
  }
}

export const fetchAdminsStart = () => {
  return {
    type: actionTypes.FETCH_ADMINS_START
  }
}

export const fetchAdminsSuccess = (admins) => {
  return {
    type: actionTypes.FETCH_ADMINS_SUCCESS,
    payload: admins
  }
}

export const fetchAdminsFailure = (error) => {
  return {
    type: actionTypes.FETCH_ADMINS_FAILURE,
    payload: error
  }
}

export const fetchAdmins = (token) => {
  return dispatch => {
    dispatch(fetchAdminsStart())
    axios.get('/admins', { headers: {'Authorization': `bearer ${token}`} })
      .then( res => {
        dispatch(fetchAdminsSuccess(res.data.data))
      } )
      .catch( error => {
        dispatch(fetchAdminsFailure(error))
      } )
  }
}

export const resetNewAdmin = () => {
  return {
    type: actionTypes.RESET_NEW_ADMIN
  }
}
