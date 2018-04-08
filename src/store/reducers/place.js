import * as actionTypes from 'store/actions/actionTypes'

const initialState = {
  activePlace: { place: null, error: null, loading: false },
  placeList: { places: [], error: null, loading: false }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLACE_START:
      return {
        ...state,
        activePlace: { place: null, error: null, loading: true }
      }
    case actionTypes.FETCH_PLACE_SUCCESS:
      return {
        ...state,
        activePlace: { place: action.payload, error: null, loading: false }
      }
    case actionTypes.FETCH_PLACE_FAILURE:
      return {
        ...state,
        activePlace: { place: null, error: action.payload, loading: false }
      }
    case actionTypes.FETCH_PLACES_START:
      return { ...state, placeList: { places: [], error: null, loading: true } }
    case actionTypes.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        placeList: { places: action.payload, error: null, loading: false }
      }
    case actionTypes.FETCH_PLACES_FAILURE:
      return {
        ...state,
        placeList: { places: [], error: action.payload, loading: false }
      }
    default:
      return state
  }
}

export default reducer
