import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import PlaceDetails from 'components/PlaceDetails'

const mapStateToProps = state => {
  return {
    place: state.place.activePlace.place,
    loading: state.place.activePlace.loading,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPlace: (token, id) => dispatch(actions.fetchPlace(token, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails)
