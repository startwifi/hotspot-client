import * as actionTypes from './actionTypes'
import axios from 'utils/api'

export const createAdminStart = () => {
  return {
    type: actionTypes.CREATE_ADMIN_START
  }
}

export const createAdminSuccess = admin => {
  return {
    type: actionTypes.CREATE_ADMIN_SUCCESS,
    payload: admin
  }
}

export const createAdminFailure = error => {
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
        firstName: admin.firstName,
        lastName: admin.lastName,
        password: admin.password
      }
    }
  }

  return dispatch => {
    dispatch(createAdminStart())
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    axios
      .post('/admins', requestData)
      .then(res => {
        dispatch(createAdminSuccess(res.data.data))
      })
      .catch(error => {
        dispatch(createAdminFailure(error.response.data.errors))
      })
  }
}

export const updateAdminStart = () => {
  return {
    type: actionTypes.UPDATE_ADMIN_START
  }
}

export const updateAdminSuccess = admin => {
  return {
    type: actionTypes.UPDATE_ADMIN_SUCCESS,
    payload: admin
  }
}

export const updateAdminFailure = error => {
  return {
    type: actionTypes.UPDATE_ADMIN_FAILURE,
    payload: error
  }
}

export const updateAdmin = (token, id, attributes) => {
  const requestData = {
    data: {
      type: 'admins',
      id: id,
      attributes: {
        firstName: attributes.firstName,
        lastName: attributes.lastName,
        email: attributes.email,
        password: attributes.password
      }
    }
  }
  return dispatch => {
    dispatch(updateAdminStart())
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    axios
      .patch(`/admins/${id}`, requestData)
      .then(res => {
        dispatch(updateAdminSuccess(res.data.data))
      })
      .catch(error => {
        dispatch(updateAdminFailure(error.response.data.errors))
      })
  }
}

export const fetchAdminStart = () => {
  return {
    type: actionTypes.FETCH_ADMIN_START
  }
}

export const fetchAdminSuccess = admin => {
  return {
    type: actionTypes.FETCH_ADMIN_SUCCESS,
    payload: admin
  }
}

export const fetchAdminFailure = error => {
  return {
    type: actionTypes.FETCH_ADMIN_FAILURE,
    payload: error
  }
}

export const fetchAdmin = (token, id) => {
  return dispatch => {
    dispatch(fetchAdminStart())
    axios
      .get(`/admins/${id}`, {
        headers: { Authorization: `bearer ${token}` }
      })
      .then(res => {
        dispatch(fetchAdminSuccess(res.data.data))
      })
      .catch(error => {
        dispatch(fetchAdminFailure(error.response.data.errors))
      })
  }
}

export const fetchAdminsStart = () => {
  return {
    type: actionTypes.FETCH_ADMINS_START
  }
}

export const fetchAdminsSuccess = admins => {
  return {
    type: actionTypes.FETCH_ADMINS_SUCCESS,
    payload: admins
  }
}

export const fetchAdminsFailure = error => {
  return {
    type: actionTypes.FETCH_ADMINS_FAILURE,
    payload: error
  }
}

export const fetchAdmins = token => {
  return dispatch => {
    dispatch(fetchAdminsStart())
    axios
      .get('/admins', { headers: { Authorization: `bearer ${token}` } })
      .then(res => {
        dispatch(fetchAdminsSuccess(res.data.data))
      })
      .catch(error => {
        dispatch(fetchAdminsFailure(error))
      })
  }
}

export const resetNewAdmin = () => {
  return {
    type: actionTypes.RESET_NEW_ADMIN
  }
}

export const resetEditAdmin = () => {
  return {
    type: actionTypes.RESET_EDIT_ADMIN
  }
}
