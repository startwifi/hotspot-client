import * as actionTypes from './actionTypes'
import axios from 'utils/api'

export const fetchPlaceStart = () => {
  return {
    type: actionTypes.FETCH_PLACE_START
  }
}

export const fetchPlaceSuccess = (place) => {
  return {
    type: actionTypes.FETCH_PLACE_SUCCESS,
    payload: place
  }
}

export const fetchPlaceFailure = (error) => {
  return {
    type: actionTypes.FETCH_PLACE_FAILURE,
    payload: error
  }
}

export const fetchPlace = (token, id) => {
  return dispatch => {
    dispatch(fetchPlaceStart())
    axios.get(`/places/${id}`, { headers: {'Authorization': `bearer ${token}`} })
      .then( res => {
        dispatch(fetchPlaceSuccess(res.data.data))
      } )
      .catch( error => {
        dispatch(fetchPlaceFailure(error))
      } )
  }
}

export const fetchPlacesStart = () => {
  return {
    type: actionTypes.FETCH_PLACES_START
  }
}

export const fetchPlacesSuccess = (places) => {
  return {
    type: actionTypes.FETCH_PLACES_SUCCESS,
    payload: places
  }
}

export const fetchPlacesFailure = (error) => {
  return {
    type: actionTypes.FETCH_PLACES_FAILURE,
    payload: error
  }
}

export const fetchPlaces = (token) => {
  return dispatch => {
    dispatch(fetchPlacesStart())
    axios.get('/places', { headers: {'Authorization': `bearer ${token}`} })
      .then( res => {
        dispatch(fetchPlacesSuccess(res.data.data))
      } )
      .catch( error => {
        dispatch(fetchPlacesFailure(error))
      } )
  }
}
