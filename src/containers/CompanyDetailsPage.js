import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import CompanyDetails from 'components/CompanyDetails'

const mapStateToProps = state => {
  return {
    company: state.company.activeCompany.company,
    loading: state.company.activeCompany.loading,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCompany: (token, id) => dispatch(actions.fetchCompany(token, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)
