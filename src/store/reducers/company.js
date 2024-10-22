import * as actionTypes from 'store/actions/actionTypes'

const initialState = {
  activeCompany: { company: null, error: null, loading: false },
  companyNew: { company: null, error: null, loading: false },
  companyEdit: { company: null, error: null, loading: false },
  companyList: { companies: [], error: null, loading: false }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_COMPANY_START:
      return {
        ...state,
        companyNew: { company: null, error: null, loading: true }
      }
    case actionTypes.CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        companyNew: { company: action.payload, error: null, loading: false }
      }
    case actionTypes.CREATE_COMPANY_FAILURE:
      return {
        ...state,
        companyNew: { company: null, error: action.payload, loading: false }
      }
    case actionTypes.UPDATE_COMPANY_START:
      return {
        ...state,
        companyEdit: { company: null, error: null, loading: true }
      }
    case actionTypes.UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        companyEdit: { company: action.payload, error: null, loading: false }
      }
    case actionTypes.UPDATE_COMPANY_FAILURE:
      return {
        ...state,
        companyEdit: { company: null, error: action.payload, loading: false }
      }
    case actionTypes.FETCH_COMPANY_START:
      return {
        ...state,
        activeCompany: { company: null, error: null, loading: true }
      }
    case actionTypes.FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        activeCompany: { company: action.payload, error: null, loading: false }
      }
    case actionTypes.FETCH_COMPANY_FAILURE:
      return {
        ...state,
        activeCompany: { company: null, error: action.payload, loading: false }
      }
    case actionTypes.FETCH_COMPANIES_START:
      return {
        ...state,
        companyList: { companies: [], error: null, loading: true }
      }
    case actionTypes.FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        companyList: { companies: action.payload, error: null, loading: false }
      }
    case actionTypes.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        companyList: { companies: [], error: action.payload, loading: false }
      }
    case actionTypes.RESET_NEW_COMPANY:
      return {
        ...state,
        companyNew: { company: null, error: null, loading: false }
      }
    case actionTypes.RESET_EDIT_COMPANY:
      return {
        ...state,
        companyEdit: { company: null, error: null, loading: false }
      }
    default:
      return state
  }
}

export default reducer
