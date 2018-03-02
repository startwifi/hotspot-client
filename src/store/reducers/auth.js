import * as actionTypes from '../actions/actionTypes'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return { ...state, token: action.accessToken, error: null, loading: false }
    case actionTypes.SIGNIN_FAILURE:
      return { ...state, error: action.error, loading: false}
    case actionTypes.AUTH_SIGNOUT:
      return { ...state, token: null }
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return { ...state, authRedirectPath: action.path }
    default: return state
  }
}

export default reducer
