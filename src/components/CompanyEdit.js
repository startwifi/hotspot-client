import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CompanyForm from 'components/CompanyForm'

class CompanyEdit extends Component {
  componentWillUnmount () {
    this.props.onResetEditCompany()
  }

  componentDidMount () {
    this.props.onFetchAdmins(this.props.token)
    this.props.onFetchCompany(this.props.token, this.props.match.params.uuid)
  }

  handleSubmit = values => {
    this.props.onUpdateCompany(
      this.props.token,
      this.props.match.params.uuid,
      values
    )
  }

  render () {
    let initialValues = null
    let redirect = null

    if (!this.props.loading && this.props.company) {
      initialValues = { ...this.props.company.attributes }
    }

    if (!this.props.loading && this.props.companyEdit) {
      redirect = <Redirect to="/companies" />
    }

    return (
      <div>
        <h1>Edit Company</h1>

        <div className="row">
          {redirect}
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-8 col-md-offset-2">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Edit company</h5>
                </div>
                <div className="ibox-content">
                  <CompanyForm onSubmit={this.handleSubmit} admins={this.props.admins} initialValues={initialValues} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyEdit
