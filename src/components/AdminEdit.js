import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AdminForm from 'components/AdminForm'

class AdminEdit extends Component {
  componentWillUnmount () {
    this.props.onResetEditAdmin()
  }

  componentDidMount () {
    this.props.onFetchAdmin(this.props.token, this.props.match.params.uuid)
  }

  handleSubmit = values => {
    this.props.onUpdateAdmin(
      this.props.token,
      this.props.match.params.uuid,
      values
    )
  }

  render () {
    let formErrors = null
    let initialValues = null
    let redirect = null

    if (!this.props.loading && this.props.admin) {
      initialValues = { ...this.props.admin.attributes }
    }

    if (!this.props.loading && this.props.adminEdit) {
      redirect = <Redirect to="/admins" />
    }

    if (!this.props.loading && this.props.error) {
      formErrors = this.props.error
    }

    return (
      <div>
        <h1>Edit Admin</h1>

        <div className="row">
          {redirect}
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-8 col-md-offset-2">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Edit admin</h5>
                </div>
                <div className="ibox-content">
                  <AdminForm
                    onSubmit={this.handleSubmit}
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

export default AdminEdit
