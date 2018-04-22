import * as actionTypes from 'store/actions/actionTypes'

const initialState = {
  activeAdmin: { admin: null, error: null, loading: false },
  adminNew: { admin: null, error: null, loading: false },
  adminEdit: { admin: null, error: null, loading: false },
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
    case actionTypes.UPDATE_ADMIN_START:
      return {
        ...state,
        adminEdit: { admin: null, error: null, loading: true }
      }
    case actionTypes.UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        adminEdit: { admin: action.payload, error: null, loading: false }
      }
    case actionTypes.UPDATE_ADMIN_FAILURE:
      return {
        ...state,
        adminEdit: { admin: null, error: action.payload, loading: false }
      }
    case actionTypes.FETCH_ADMIN_START:
      return {
        ...state,
        activeAdmin: { admin: null, error: null, loading: true }
      }
    case actionTypes.FETCH_ADMIN_SUCCESS:
      return {
        ...state,
        activeAdmin: { admin: action.payload, error: null, loading: false }
      }
    case actionTypes.FETCH_ADMIN_FAILURE:
      return {
        ...state,
        activeAdmin: { admin: null, error: action.payload, loading: false }
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
    case actionTypes.RESET_EDIT_ADMIN:
      return {
        ...state,
        adminEdit: { admin: null, error: null, loading: false }
      }
    default:
      return state
  }
}

export default reducer
