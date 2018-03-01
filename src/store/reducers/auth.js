import * as actionTypes from '../actions/actionTypes'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return { ...state, token: action.accessToken, error: null, loading: false }
    case actionTypes.SIGNIN_FAILURE:
      return { ...state, error: action.error, loading: false}
    default: return state
  }
}

export default reducer
