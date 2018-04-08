import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import AdminList from 'components/AdminList'

const mapStateToProps = state => {
  return {
    admins: state.admin.adminList.admins,
    loading: state.admin.adminList.loading,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAdmins: token => dispatch(actions.fetchAdmins(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList)
