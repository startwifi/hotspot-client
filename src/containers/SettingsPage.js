import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import Settings from 'components/Settings'

const mapStateToProps = state => {
  return {
    settings: state.settings.activeSettings.settings,
    loading: state.settings.activeSettings.loading,
    errors: state.settings.activeSettings.error,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchSettings: (token, id) =>
      dispatch(actions.fetchCompanySettings(token, id)),
    onUpdateSettings: (token, id, settings) =>
      dispatch(actions.updateCompanySettings(token, id, settings)),
    onResetSettings: () => dispatch(actions.resetEditCompanySettings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
