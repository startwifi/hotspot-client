import * as actionTypes from '../actions/actionTypes'

const initialState = {
  companiesList: { companies: [], error: null, loading: false }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMPANIES_START:
      return { ...state, companies: [], error: null, loading: true }
    case actionTypes.FETCH_COMPANIES_SUCCESS:
      return { ...state, companies: action.payload, error: null, loading: false }
    case actionTypes.FETCH_COMPANIES_FAILURE:
      return { ...state, companies: [], error: action.payload, loading: false }
    default: return state
  }
}

export default reducer
