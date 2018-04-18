import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import CompanyNew from 'components/CompanyNew'

const mapStateToProps = state => {
  return {
    company: state.company.companyNew.company,
    admins: state.admin.adminList.admins,
    loading: state.company.companyNew.loading,
    error: state.company.companyNew.error,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateCompany: (token, company) =>
      dispatch(actions.createCompany(token, company)),
    onFetchAdmins: token => dispatch(actions.fetchAdmins(token)),
    onResetNewCompany: () => dispatch(actions.resetNewCompany())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyNew)
