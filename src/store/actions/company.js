import * as actionTypes from './actionTypes'
import axios from 'utils/api'

export const createCompanyStart = () => {
  return {
    type: actionTypes.CREATE_COMPANY_START
  }
}

export const createCompany = (token, company) => {
  const requestData = {
    data: {
      type: 'companies',
      attributes: {
        name: company.name,
        ownerId: company.ownerId
      }
    }
  }
  return dispatch => {
    dispatch(createCompanyStart())
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    axios
      .post('/companies', requestData)
      .then(res => {
        dispatch(createCompanySuccess(res.data.data))
      })
      .catch(error => {
        dispatch(createCompanyFailure(error.response.data.errors))
      })
  }
}

export const createCompanySuccess = company => {
  return {
    type: actionTypes.CREATE_COMPANY_SUCCESS,
    payload: company
  }
}

export const createCompanyFailure = error => {
  return {
    type: actionTypes.CREATE_COMPANY_FAILURE,
    payload: error
  }
}

export const updateCompanyStart = () => {
  return {
    type: actionTypes.UPDATE_COMPANY_START
  }
}

export const updateCompany = (token, id, attributes) => {
  const requestData = {
    data: {
      type: 'companies',
      id: id,
      attributes: {
        name: attributes.name,
        ownerId: attributes.ownerId
      }
    }
  }
  return dispatch => {
    dispatch(updateCompanyStart())
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    axios
      .patch(`/companies/${id}`, requestData)
      .then(res => {
        dispatch(updateCompanySuccess(res.data.data))
      })
      .catch(error => {
        dispatch(updateCompanyFailure(error.response.data.errors))
      })
  }
}

export const updateCompanySuccess = company => {
  return {
    type: actionTypes.UPDATE_COMPANY_SUCCESS,
    payload: company
  }
}

export const updateCompanyFailure = error => {
  return {
    type: actionTypes.UPDATE_COMPANY_FAILURE,
    payload: error
  }
}

export const fetchCompanyStart = () => {
  return {
    type: actionTypes.FETCH_COMPANY_START
  }
}

export const fetchCompanySuccess = company => {
  return {
    type: actionTypes.FETCH_COMPANY_SUCCESS,
    payload: company
  }
}

export const fetchCompanyFailure = error => {
  return {
    type: actionTypes.FETCH_COMPANY_FAILURE,
    payload: error
  }
}

export const fetchCompany = (token, id) => {
  return dispatch => {
    dispatch(fetchCompanyStart())
    axios
      .get(`/companies/${id}`, {
        headers: { Authorization: `bearer ${token}` }
      })
      .then(res => {
        dispatch(fetchCompanySuccess(res.data.data))
      })
      .catch(error => {
        dispatch(fetchCompanyFailure(error))
      })
  }
}

export const fetchCompaniesStart = () => {
  return {
    type: actionTypes.FETCH_COMPANIES_START
  }
}

export const fetchCompaniesSuccess = companies => {
  return {
    type: actionTypes.FETCH_COMPANIES_SUCCESS,
    payload: companies
  }
}

export const fetchCompaniesFailure = error => {
  return {
    type: actionTypes.FETCH_COMPANIES_FAILURE,
    payload: error
  }
}

export const fetchCompanies = token => {
  return dispatch => {
    dispatch(fetchCompaniesStart())
    axios
      .get('/companies', { headers: { Authorization: `bearer ${token}` } })
      .then(res => {
        dispatch(fetchCompaniesSuccess(res.data.data))
      })
      .catch(error => {
        dispatch(fetchCompaniesFailure(error))
      })
  }
}

export const resetNewCompany = () => {
  return {
    type: actionTypes.RESET_NEW_COMPANY
  }
}

export const resetEditCompany = () => {
  return {
    type: actionTypes.RESET_EDIT_COMPANY
  }
}
