import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import CompanyDetails from 'components/CompanyDetails'

const mapStateToProps = state => {
  return {
    company: state.company.activeCompany.company,
    places: state.place.placeList.places,
    loading: state.company.activeCompany.loading,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCompany: (token, id) => dispatch(actions.fetchCompany(token, id)),
    onFetchPlaces: (token, companyId) =>
      dispatch(actions.fetchPlaces(token, companyId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)
