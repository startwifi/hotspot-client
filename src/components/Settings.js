import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import SettingsForm from 'components/SettingsForm'

class Settings extends Component {
  componentWillUnmount () {
    this.props.onResetSettings()
  }

  componentDidMount () {
    this.props.onFetchSettings(this.props.token, this.props.match.params.uuid)
  }

  handleSubmit = values => {
    this.props.onUpdateSettings(
      this.props.token,
      this.props.match.params.uuid,
      values
    )
  }

  render () {
    let attributes = null
    let formErrors = null
    let initialValues = null
    // let redirect = null

    if (!this.props.loading && this.props.settings) {
      attributes = this.props.settings.settings[this.props.match.params.uuid].attributes
      initialValues = { ...this.props.settings.settings[this.props.match.params.uuid].attributes }
    }

    if (!this.props.loading && this.props.error) {
      formErrors = this.props.error
    }

    return (
      <div>
        <h1>Settings</h1>

        <div className="row">
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-12">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Edit settings</h5>
                </div>
                <div className="ibox-content">
                  <SettingsForm
                    onSubmit={this.handleSubmit}
                    providers={attributes}
                    initialValues={initialValues}
                    errors={formErrors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
