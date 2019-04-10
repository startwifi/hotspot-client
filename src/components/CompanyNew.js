import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CompanyForm from 'components/CompanyForm'

class CompanyNew extends Component {
  componentWillUnmount () {
    this.props.onResetNewCompany()
  }

  componentDidMount () {
    this.props.onFetchAdmins(this.props.token)
  }

  handleSubmit = values => {
    this.props.onCreateCompany(
      this.props.token,
      values
    )
  }

  render () {
    let formErrors = null
    let redirect = null

    if (!this.props.loading && this.props.company) {
      redirect = <Redirect to="/companies" />
    }

    if (!this.props.loading && this.props.error) {
      formErrors = this.props.error
    }

    console.log(formErrors)

    return (
      <div>
        <h1>New Company</h1>

        <div className="row">
          {redirect}
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-8 col-md-offset-2">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>New company</h5>
                </div>
                <div className="ibox-content">
                  <CompanyForm
                    handleSubmit={this.handleSubmit}
                    admins={this.props.admins}
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

export default CompanyNew
