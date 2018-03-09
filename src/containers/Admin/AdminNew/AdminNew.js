import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import AdminNew from '../../../components/Admin/AdminNew/AdminNew'

const mapStateToProps = state => {
  return {
    admin: state.admin.adminNew.admin,
    loading: state.admin.adminNew.loading,
    error: state.admin.adminNew.error,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateAdmin: (token, admin) => dispatch(actions.createAdmin(token, admin)),
    onResetNewAdmin: () => dispatch(actions.resetNewAdmin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNew)
