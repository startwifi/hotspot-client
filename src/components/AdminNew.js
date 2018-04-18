import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AdminForm from 'components/AdminForm'

class AdminNew extends Component {
  componentWillMount () {
    this.props.onResetNewAdmin()
  }

  handleSubmit = values => {
    this.props.onCreateAdmin(
      this.props.token,
      values
    )
  }

  render () {
    let formErrors = null
    let redirect = null

    if (!this.props.loading && this.props.admin) {
      redirect = <Redirect to="/admins" />
    }

    if (!this.props.loading && this.props.error) {
      formErrors = this.props.error
    }

    return (
      <div>
        <h1>New Admin</h1>

        <div className="row">
          {redirect}
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-8 col-md-offset-2">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>New Admin</h5>
                </div>
                <div className="ibox-content">
                  <AdminForm onSubmit={this.handleSubmit} errors={formErrors} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminNew
