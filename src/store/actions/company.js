import * as actionTypes from './actionTypes'
import axios from '../../utils/api'

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
        subdomain: company.subdomain,
        ownerId: company.owner_id
      }
    }
  }
  return dispatch => {
    dispatch(createCompanyStart())
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    axios.post('/companies', requestData)
      .then( res => {
        dispatch(fetchCompaniesSuccess(res.data.data))
      } )
      .catch( error => {
        dispatch(fetchCompaniesFailure(error))
      } )
  }
}

export const fetchCompaniesStart = () => {
  return {
    type: actionTypes.FETCH_COMPANIES_START
  }
}

export const fetchCompaniesSuccess = (companies) => {
  return {
    type: actionTypes.FETCH_COMPANIES_SUCCESS,
    payload: companies
  }
}

export const fetchCompaniesFailure = (error) => {
  return {
    type: actionTypes.FETCH_COMPANIES_FAILURE,
    payload: error
  }
}

export const fetchCompanies = (token) => {
  return dispatch => {
    dispatch(fetchCompaniesStart())
    axios.get('/companies', { headers: {'Authorization': `bearer ${token}`} })
      .then( res => {
        dispatch(fetchCompaniesSuccess(res.data.data))
      } )
      .catch( error => {
        dispatch(fetchCompaniesFailure(error))
      } )
  }
}

export const resetNewCompany = () => {
  return {
    type: actionTypes.RESET_NEW_COMPANY,
  }
}
