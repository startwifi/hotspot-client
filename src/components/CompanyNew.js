import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CompanyNewForm from 'components/CompanyNewForm'

class CompanyNew extends Component {
  componentWillMount () {
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
    let redirect = null

    if (!this.props.loading && this.props.company) {
      redirect = <Redirect to="/companies" />
    }

    return (
      <div>
        <h1>New Company</h1>

        <div className="row">
          {redirect}
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-8 col-md-offset-2">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>New account</h5>
                </div>
                <div className="ibox-content">
                  <CompanyNewForm onSubmit={this.handleSubmit} admins={this.props.admins} />
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
