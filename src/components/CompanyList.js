import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CompanyListItem from 'components/CompanyListItem'

class CompanyList extends Component {
  componentDidMount () {
    this.props.onFetchCompanies(this.props.token)
  }

  render () {
    let companies = null

    if (!this.props.loading && this.props.companies) {
      companies = this.props.companies.map(company => (
        <CompanyListItem key={company.id} company={company} />
      ))
    }

    return (
      <div>
        <h1>Companies</h1>
        <div className="row">
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-8 col-md-offset-2">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Companies</h5>
                  <div className="ibox-tools">
                    <Link to="/companies/new" className="btn btn-primary btn-xs">Create new company</Link>
                  </div>
                </div>
                <div className="ibox-content">
                  <div className="project-list">
                    <table className="table table-hover">
                      <tbody>
                        {companies}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyList
