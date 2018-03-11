import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AdminNewForm from 'components/AdminNewForm'

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
    let redirect = null

    if (!this.props.loading && this.props.admin) {
      redirect = <Redirect to="/admins" />
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
                  <AdminNewForm onSubmit={this.handleSubmit} />
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
