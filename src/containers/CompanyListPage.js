import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import CompanyList from 'components/CompanyList'

const mapStateToProps = state => {
  return {
    companies: state.company.companyList.companies,
    loading: state.company.companyList.loading,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCompanies: token => dispatch(actions.fetchCompanies(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
