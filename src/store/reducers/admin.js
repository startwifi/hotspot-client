import * as actionTypes from 'store/actions/actionTypes'

const initialState = {
  adminNew: { admin: null, error: null, loading: false },
  adminList: { admins: [], error: null, loading: false }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ADMIN_START:
      return { ...state, adminNew: { admin: null, error: null, loading: true } }
    case actionTypes.CREATE_ADMIN_SUCCESS:
      return {
        ...state,
        adminNew: { admin: action.payload, error: null, loading: false }
      }
    case actionTypes.CREATE_ADMIN_FAILURE:
      return {
        ...state,
        adminNew: { admin: null, error: action.payload, loading: false }
      }
    case actionTypes.FETCH_ADMINS_START:
      return { ...state, adminList: { admins: [], error: null, loading: true } }
    case actionTypes.FETCH_ADMINS_SUCCESS:
      return {
        ...state,
        adminList: { admins: action.payload, error: null, loading: false }
      }
    case actionTypes.FETCH_ADMINS_FAILURE:
      return {
        ...state,
        adminList: { admins: [], error: action.payload, loading: false }
      }
    case actionTypes.RESET_NEW_ADMIN:
      return {
        ...state,
        adminNew: { admin: null, error: null, loading: false }
      }
    default:
      return state
  }
}

export default reducer
