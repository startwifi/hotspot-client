import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import CompanyEdit from 'components/CompanyEdit'

const mapStateToProps = state => {
  return {
    company: state.company.activeCompany.company,
    companyEdit: state.company.companyEdit.company,
    admins: state.admin.adminList.admins,
    loading: state.company.companyEdit.loading,
    error: state.company.companyEdit.error,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAdmins: (token) => dispatch(actions.fetchAdmins(token)),
    onFetchCompany: (token, id) => dispatch(actions.fetchCompany(token, id)),
    onUpdateCompany: (token, id, company) => dispatch(actions.updateCompany(token, id, company)),
    onResetEditCompany: () => dispatch(actions.resetEditCompany())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyEdit)
