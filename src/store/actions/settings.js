import * as actionTypes from './actionTypes'
import axios from 'utils/api'
import normalize from 'json-api-normalizer'

export const updateCompanySettingsStart = () => {
  return {
    type: actionTypes.UPDATE_COMPANY_SETTINGS_START
  }
}

export const updateCompanySettings = (token, id, attributes) => {
  console.log(attributes)
  const requestData = {
    data: {
      type: 'settings',
      id: id,
      attributes: {
        name: attributes.name
      }
    }
  }
  return dispatch => {
    dispatch(updateCompanySettingsStart())
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    axios
      .patch(`/settings/${id}`, requestData)
      .then(res => {
        dispatch(updateCompanySettingsSuccess(res.data.data))
      })
      .catch(error => {
        dispatch(updateCompanySettingsFailure(error.response.data.errors))
      })
  }
}

export const updateCompanySettingsSuccess = settings => {
  return {
    type: actionTypes.UPDATE_COMPANY_SETTINGS_SUCCESS,
    payload: settings
  }
}

export const updateCompanySettingsFailure = error => {
  return {
    type: actionTypes.UPDATE_COMPANY_SETTINGS_FAILURE,
    payload: error
  }
}

export const fetchCompanySettingsStart = () => {
  return {
    type: actionTypes.FETCH_COMPANY_SETTINGS_START
  }
}

export const fetchCompanySettingsSuccess = settings => {
  return {
    type: actionTypes.FETCH_COMPANY_SETTINGS_SUCCESS,
    payload: settings
  }
}

export const fetchCompanySettingsFailure = error => {
  return {
    type: actionTypes.FETCH_COMPANY_SETTINGS_FAILURE,
    payload: error
  }
}

export const fetchCompanySettings = (token, id) => {
  return dispatch => {
    dispatch(fetchCompanySettingsStart())
    axios
      .get(`/settings/${id}/edit?include=providers,company`, {
        headers: { Authorization: `bearer ${token}` }
      })
      .then(res => {
        const data = normalize(res.data)
        dispatch(fetchCompanySettingsSuccess(data))
      })
      .catch(error => {
        dispatch(fetchCompanySettingsFailure(error))
      })
  }
}

export const resetEditCompanySettings = () => {
  return {
    type: actionTypes.RESET_EDIT_COMPANY_SETTINGS
  }
}
