import * as actionTypes from 'store/actions/actionTypes'

const initialState = {
  activeSettings: { settings: null, error: null, loading: false },
  settingsEdit: { settings: null, error: null, loading: false },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COMPANY_SETTINGS_START:
      return {
        ...state,
        settingsEdit: { settings: null, error: null, loading: true }
      }
    case actionTypes.UPDATE_COMPANY_SETTINGS_SUCCESS:
      return {
        ...state,
        settingsEdit: { settings: action.payload, error: null, loading: false }
      }
    case actionTypes.UPDATE_COMPANY_SETTINGS_FAILURE:
      return {
        ...state,
        settingsEdit: { company: null, settings: null, error: action.payload, loading: false }
      }
    case actionTypes.FETCH_COMPANY_SETTINGS_START:
      return {
        ...state,
        activeSettings: { settings: null, error: null, loading: true }
      }
    case actionTypes.FETCH_COMPANY_SETTINGS_SUCCESS:
      return {
        ...state,
        activeSettings: { settings: action.payload, error: null, loading: false }
      }
    case actionTypes.FETCH_COMPANY_SETTINGS_FAILURE:
      return {
        ...state,
        activeSettings: { settings: null, error: action.payload, loading: false }
      }
    case actionTypes.RESET_EDIT_COMPANY_SETTINGS:
      return {
        ...state,
        settingsEdit: { settings: null, error: null, loading: false }
      }
    default:
      return state
  }
}

export default reducer
