import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import AdminEdit from 'components/AdminEdit'

const mapStateToProps = state => {
  return {
    admin: state.admin.activeAdmin.admin,
    adminEdit: state.admin.adminEdit.admin,
    loading: state.admin.adminEdit.loading,
    error: state.admin.adminEdit.error,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAdmin: (token, id) => dispatch(actions.fetchAdmin(token, id)),
    onUpdateAdmin: (token, id, admin) =>
      dispatch(actions.updateAdmin(token, id, admin)),
    onResetEditAdmin: () => dispatch(actions.resetEditAdmin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEdit)
