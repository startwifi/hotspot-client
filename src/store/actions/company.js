import * as actionTypes from './actionTypes'
import axios from '../../utils/api'

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